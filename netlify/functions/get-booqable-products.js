// netlify/functions/get-products.js

exports.handler = async (event, context) => {
  // Add CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Content-Type": "application/json",
  };

  // Handle OPTIONS request for CORS
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    // Get your Booqable credentials from environment variables
    const BOOQABLE_SUBDOMAIN =
      process.env.BOOQABLE_SUBDOMAIN || "bytown-bounce";
    const BOOQABLE_API_TOKEN =
      process.env.BOOQABLE_KEY || process.env.BOOQABLE_API_TOKEN;

    if (!BOOQABLE_SUBDOMAIN || !BOOQABLE_API_TOKEN) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: "Missing Booqable credentials in environment variables",
        }),
      };
    }

    // Fetch products from Booqable API
    const collectionsResponse = await fetch(
      `https://${BOOQABLE_SUBDOMAIN}.booqable.com/api/4/collections?page[size]=100`,
      {
        headers: {
          Authorization: `Bearer ${BOOQABLE_API_TOKEN}`,
        },
      }
    );

    if (!collectionsResponse.ok) {
      throw new Error(
        `Booqable Collections API error: ${collectionsResponse.status}`
      );
    }

    const collectionsData = await collectionsResponse.json();

    // Fetch all collection items to map products to collections
    const collectionItemsResponse = await fetch(
      `https://${BOOQABLE_SUBDOMAIN}.booqable.com/api/4/collection_items?page[size]=100`,
      {
        headers: {
          Authorization: `Bearer ${BOOQABLE_API_TOKEN}`,
        },
      }
    );

    if (!collectionItemsResponse.ok) {
      throw new Error(
        `Booqable Collection Items API error: ${collectionItemsResponse.status}`
      );
    }

    const collectionItemsData = await collectionItemsResponse.json();

    // Fetch products
    const productsResponse = await fetch(
      `https://${BOOQABLE_SUBDOMAIN}.booqable.com/api/4/product_groups?page[size]=100`,
      {
        headers: {
          Authorization: `Bearer ${BOOQABLE_API_TOKEN}`,
        },
      }
    );

    if (!productsResponse.ok) {
      throw new Error(
        `Booqable Products API error: ${productsResponse.status}`
      );
    }

    const productsData = await productsResponse.json();

    // Create a map of products by their ID
    const productsMap = {};
    if (productsData.data) {
      productsData.data.forEach((product) => {
        productsMap[product.id] = product;
      });
    }

    // Group collection items by collection_id

    const collectionsMap = {};
    (collectionsData.data || []).forEach((col) => {
      collectionsMap[col.id] = col;
    });

    const joined = (collectionItemsData.data || [])
      .map((item) => {
        const col = collectionsMap[item.attributes.collection_id];
        if (!col) return null; // skip if collection not found
        return {
          ...col,
          id: col.id,
          name: col.attributes.name,
          slug: col.attributes.slug,
          collection_id: item.attributes.collection_id,
          item_id: item.attributes.item_id,
        };
      })
      .filter(Boolean);
    const collectionProductsMap = [];
    if (joined) {
      joined.forEach((item) => {
        const collectionId = item.id;
        const collectionName = item.name;
        const collectionSlug = item.slug;
        const itemId = item.item_id;

        let presentCollection = collectionProductsMap.find(
          (collection) => collection.id === collectionId
        );

        // If the collection doesn't exist yet, create it and push it
        if (!presentCollection) {
          presentCollection = {
            id: collectionId,
            name: collectionName || "",
            slug: collectionSlug || "",
            products: [],
          };
          collectionProductsMap.push(presentCollection);
        }

        if (productsMap[itemId]) {
          presentCollection.products.push(productsMap[itemId]);
        }
      });
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(collectionProductsMap),
    };
  } catch (error) {
    console.error("Error fetching products:", error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: "Failed to fetch products",
        message: error.message,
      }),
    };
  }
};
