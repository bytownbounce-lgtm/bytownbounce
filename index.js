// Stripe Key
// const stripe = Stripe(
//   "pk_live_51SdYwVFB9Y5lqPP0lTZzRYe6HJFBGjSAnwCOAsO1RsaMzXU22mS4n1A2YxX89g6OiuC37VEqeUOyxNO8EndZNPb000uffmwiJM"
// );

const hardcodedProductImages = {
  "classic-rainbow-castle": [
    "https://bytownbounce.ca/images/classic-1.jpg",
    "https://bytownbounce.ca/images/classic-2.jpg",
    "https://bytownbounce.ca/images/classic-3.jpg",
    "https://bytownbounce.ca/images/classic-4.jpg",
    "https://bytownbounce.ca/images/classic-5.jpg",
    "https://bytownbounce.ca/images/classic-6.jpg",
  ],
  "classic rainbow castle": [
    "https://bytownbounce.ca/images/classic-1.jpg",
    "https://bytownbounce.ca/images/classic-2.jpg",
    "https://bytownbounce.ca/images/classic-3.jpg",
    "https://bytownbounce.ca/images/classic-4.jpg",
    "https://bytownbounce.ca/images/classic-5.jpg",
    "https://bytownbounce.ca/images/classic-6.jpg",
  ],
  "white-castle": [
    "https://bytownbounce.ca/images/white-1.jpg",
    "https://bytownbounce.ca/images/white-2.jpg",
    "https://bytownbounce.ca/images/white-3.jpg",
    "https://bytownbounce.ca/images/white-4.jpg",
    "https://bytownbounce.ca/images/white-5.jpg",
    "https://bytownbounce.ca/images/white-6.jpg",
  ],
  "white castle": [
    "https://bytownbounce.ca/images/white-1.jpg",
    "https://bytownbounce.ca/images/white-2.jpg",
    "https://bytownbounce.ca/images/white-3.jpg",
    "https://bytownbounce.ca/images/white-4.jpg",
    "https://bytownbounce.ca/images/white-5.jpg",
    "https://bytownbounce.ca/images/white-6.jpg",
  ],
  "mega-slide-combo": [
    "https://bytownbounce.ca/images/mega-1.jpg",
    "https://bytownbounce.ca/images/mega-2.jpg",
    "https://bytownbounce.ca/images/mega-3.jpg",
    "https://bytownbounce.ca/images/mega-4.jpg",
    "https://bytownbounce.ca/images/mega-5.jpg",
    "https://bytownbounce.ca/images/mega-1.jpg",
  ],
  "mega slide combo": [
    "https://bytownbounce.ca/images/mega-1.jpg",
    "https://bytownbounce.ca/images/mega-2.jpg",
    "https://bytownbounce.ca/images/mega-3.jpg",
    "https://bytownbounce.ca/images/mega-4.jpg",
    "https://bytownbounce.ca/images/mega-5.jpg",
    "https://bytownbounce.ca/images/mega-1.jpg",
  ],
  "mega-slide-combo2": [
    "https://bytownbounce.ca/images/mega-1.jpg",
    "https://bytownbounce.ca/images/mega-combo2.jpeg",
    "https://bytownbounce.ca/images/mega-combo3.jpeg",
    "https://bytownbounce.ca/images/mega-combo4.jpeg",
    "https://bytownbounce.ca/images/mega-combo5.jpeg",
    "https://bytownbounce.ca/images/mega-combo1.jpeg",
  ],
  "mega slide combo 2": [
    "https://bytownbounce.ca/images/mega-1.jpg",
    "https://bytownbounce.ca/images/mega-combo2.jpeg",
    "https://bytownbounce.ca/images/mega-combo3.jpeg",
    "https://bytownbounce.ca/images/mega-combo4.jpeg",
    "https://bytownbounce.ca/images/mega-combo5.jpeg",
    "https://bytownbounce.ca/images/mega-combo1.jpeg",
  ],
  "mega-water-slides": [
    "https://bytownbounce.ca/images/water-1.jpg",
    "https://bytownbounce.ca/images/water-2.jpg",
    "https://bytownbounce.ca/images/water-3.jpg",
    "https://bytownbounce.ca/images/water-4.jpg",
    "https://bytownbounce.ca/images/water-5.jpg",
    "https://bytownbounce.ca/images/water-6.jpg",
  ],
  "mega water slides": [
    "https://bytownbounce.ca/images/water-1.jpg",
    "https://bytownbounce.ca/images/water-2.jpg",
    "https://bytownbounce.ca/images/water-3.jpg",
    "https://bytownbounce.ca/images/water-4.jpg",
    "https://bytownbounce.ca/images/water-5.jpg",
    "https://bytownbounce.ca/images/water-6.jpg",
  ],
  "mega-obstacle-course": [
    "https://bytownbounce.ca/images/obstacle-1.jpg",
    "https://bytownbounce.ca/images/obstacle-2.jpg",
    "https://bytownbounce.ca/images/obstacle-3.jpg",
    "https://bytownbounce.ca/images/obstacle-4.jpg",
    "https://bytownbounce.ca/images/obstacle-5.jpg",
    "https://bytownbounce.ca/images/obstacle-6.jpg",
  ],
  "mega obstacle course": [
    "https://bytownbounce.ca/images/obstacle-1.jpg",
    "https://bytownbounce.ca/images/obstacle-2.jpg",
    "https://bytownbounce.ca/images/obstacle-3.jpg",
    "https://bytownbounce.ca/images/obstacle-4.jpg",
    "https://bytownbounce.ca/images/obstacle-5.jpg",
    "https://bytownbounce.ca/images/obstacle-6.jpg",
  ],
  spiderman: [
    "https://bytownbounce.ca/images/spiderman.jpeg",
    "https://bytownbounce.ca/images/spiderman2.jpeg",
    "https://bytownbounce.ca/images/spiderman3.jpeg",
    "https://bytownbounce.ca/images/spiderman4.jpeg",
    "https://bytownbounce.ca/images/spiderman5.jpeg",
    "https://bytownbounce.ca/images/spiderman6.jpeg",
  ],
  "spiderman toddler bounce": [
    "https://bytownbounce.ca/images/spiderman.jpeg",
    "https://bytownbounce.ca/images/spiderman2.jpeg",
    "https://bytownbounce.ca/images/spiderman3.jpeg",
    "https://bytownbounce.ca/images/spiderman4.jpeg",
    "https://bytownbounce.ca/images/spiderman5.jpeg",
    "https://bytownbounce.ca/images/spiderman6.jpeg",
  ],
  unicorn: [
    "https://bytownbounce.ca/images/unicorn.jpeg",
    "https://bytownbounce.ca/images/unicorn2.jpeg",
    "https://bytownbounce.ca/images/unicorn3.jpeg",
    "https://bytownbounce.ca/images/unicorn4.jpeg",
    "https://bytownbounce.ca/images/unicorn5.jpeg",
    "https://bytownbounce.ca/images/unicorn6.jpeg",
  ],
  "unicorn toddler bounce": [
    "https://bytownbounce.ca/images/unicorn.jpeg",
    "https://bytownbounce.ca/images/unicorn2.jpeg",
    "https://bytownbounce.ca/images/unicorn3.jpeg",
    "https://bytownbounce.ca/images/unicorn4.jpeg",
    "https://bytownbounce.ca/images/unicorn5.jpeg",
    "https://bytownbounce.ca/images/unicorn6.jpeg",
  ],
  mickey: [
    "https://bytownbounce.ca/images/mickey1.jpeg",
    "https://bytownbounce.ca/images/mickey2.jpeg",
    "https://bytownbounce.ca/images/mickey3.jpeg",
    "https://bytownbounce.ca/images/mickey4.jpeg",
    "https://bytownbounce.ca/images/mickey5.jpeg",
    "https://bytownbounce.ca/images/toddler-1.jpg",
  ],
  "mickey mouse toddler bounce": [
    "https://bytownbounce.ca/images/mickey1.jpeg",
    "https://bytownbounce.ca/images/mickey2.jpeg",
    "https://bytownbounce.ca/images/mickey3.jpeg",
    "https://bytownbounce.ca/images/mickey4.jpeg",
    "https://bytownbounce.ca/images/mickey5.jpeg",
    "https://bytownbounce.ca/images/toddler-1.jpg",
  ],
  basketball: [
    "https://bytownbounce.ca/images/basketball-1.jpg",
    "https://bytownbounce.ca/images/basketball-2.jpg",
    "https://bytownbounce.ca/images/basketball-3.jpg",
    "https://bytownbounce.ca/images/basketball-4.jpg",
    "https://bytownbounce.ca/images/basketball-5.jpg",
    "https://bytownbounce.ca/images/basketball-6.jpg",
  ],
  "13ft basketball hoop game": [
    "https://bytownbounce.ca/images/basketball-1.jpg",
    "https://bytownbounce.ca/images/basketball-2.jpg",
    "https://bytownbounce.ca/images/basketball-3.jpg",
    "https://bytownbounce.ca/images/basketball-4.jpg",
    "https://bytownbounce.ca/images/basketball-5.jpg",
    "https://bytownbounce.ca/images/basketball-6.jpg",
  ],
  carnival: [
    "https://bytownbounce.ca/images/carnival-1.jpg",
    "https://bytownbounce.ca/images/carnival-2.jpg",
    "https://bytownbounce.ca/images/carnival-3.jpg",
    "https://bytownbounce.ca/images/carnival-4.jpg",
    "https://bytownbounce.ca/images/carnival-5.jpg",
    "https://bytownbounce.ca/images/carnival-6.jpg",
  ],
  "5-in-1 carnival game": [
    "https://bytownbounce.ca/images/carnival-1.jpg",
    "https://bytownbounce.ca/images/carnival-2.jpg",
    "https://bytownbounce.ca/images/carnival-3.jpg",
    "https://bytownbounce.ca/images/carnival-4.jpg",
    "https://bytownbounce.ca/images/carnival-5.jpg",
    "https://bytownbounce.ca/images/carnival-6.jpg",
  ],
  soccerdarts: [
    "https://bytownbounce.ca/images/soccerdarts-1.jpg",
    "https://bytownbounce.ca/images/soccerdarts-2.jpg",
    "https://bytownbounce.ca/images/soccerdarts-3.jpg",
    "https://bytownbounce.ca/images/soccerdarts-4.jpg",
    "https://bytownbounce.ca/images/soccerdarts-5.jpg",
    "https://bytownbounce.ca/images/soccerdarts-6.jpg",
  ],
  "10 ft soccer darts board": [
    "https://bytownbounce.ca/images/soccerdarts-1.jpg",
    "https://bytownbounce.ca/images/soccerdarts-2.jpg",
    "https://bytownbounce.ca/images/soccerdarts-3.jpg",
    "https://bytownbounce.ca/images/soccerdarts-4.jpg",
    "https://bytownbounce.ca/images/soccerdarts-5.jpg",
    "https://bytownbounce.ca/images/soccerdarts-6.jpg",
  ],
  snowcone: [
    "https://bytownbounce.ca/images/snowcone-1.jpg",
    "https://bytownbounce.ca/images/snowcone-2.jpg",
    "https://bytownbounce.ca/images/snowcone-3.jpg",
    "https://bytownbounce.ca/images/snowcone-4.jpg",
    "https://bytownbounce.ca/images/snowcone-5.jpg",
    "https://bytownbounce.ca/images/snowcone-6.jpg",
  ],
  "snow cone machine": [
    "https://bytownbounce.ca/images/snowcone-1.jpg",
    "https://bytownbounce.ca/images/snowcone-2.jpg",
    "https://bytownbounce.ca/images/snowcone-3.jpg",
    "https://bytownbounce.ca/images/snowcone-4.jpg",
    "https://bytownbounce.ca/images/snowcone-5.jpg",
    "https://bytownbounce.ca/images/snowcone-6.jpg",
  ],
  popcorn: [
    "https://bytownbounce.ca/images/popcorn-1.jpg",
    "https://bytownbounce.ca/images/popcorn-2.jpg",
    "https://bytownbounce.ca/images/popcorn-3.jpg",
    "https://bytownbounce.ca/images/popcorn-4.jpg",
    "https://bytownbounce.ca/images/popcorn-5.jpg",
    "https://bytownbounce.ca/images/popcorn-6.jpg",
  ],
  "popcorn machine": [
    "https://bytownbounce.ca/images/popcorn-1.jpg",
    "https://bytownbounce.ca/images/popcorn-2.jpg",
    "https://bytownbounce.ca/images/popcorn-3.jpg",
    "https://bytownbounce.ca/images/popcorn-4.jpg",
    "https://bytownbounce.ca/images/popcorn-5.jpg",
    "https://bytownbounce.ca/images/popcorn-6.jpg",
  ],
  cottoncandy: [
    "https://bytownbounce.ca/images/cottoncandy-1.jpg",
    "https://bytownbounce.ca/images/cottoncandy-2.jpg",
    "https://bytownbounce.ca/images/cottoncandy-3.jpg",
    "https://bytownbounce.ca/images/cottoncandy-4.jpg",
    "https://bytownbounce.ca/images/cottoncandy-5.jpg",
    "https://bytownbounce.ca/images/cottoncandy-6.jpg",
  ],
  "cotton candy machine": [
    "https://bytownbounce.ca/images/cottoncandy-1.jpg",
    "https://bytownbounce.ca/images/cottoncandy-2.jpg",
    "https://bytownbounce.ca/images/cottoncandy-3.jpg",
    "https://bytownbounce.ca/images/cottoncandy-4.jpg",
    "https://bytownbounce.ca/images/cottoncandy-5.jpg",
    "https://bytownbounce.ca/images/cottoncandy-6.jpg",
  ],
  table: [
    "https://bytownbounce.ca/images/table-1.jpg",
    "https://bytownbounce.ca/images/table-2.jpg",
    "https://bytownbounce.ca/images/table-3.jpg",
    "https://bytownbounce.ca/images/table-4.jpg",
    "https://bytownbounce.ca/images/table-5.jpg",
    "https://bytownbounce.ca/images/table-6.jpg",
  ],
  "6-ft folding table": [
    "https://bytownbounce.ca/images/table-1.jpg",
    "https://bytownbounce.ca/images/table-2.jpg",
    "https://bytownbounce.ca/images/table-3.jpg",
    "https://bytownbounce.ca/images/table-4.jpg",
    "https://bytownbounce.ca/images/table-5.jpg",
    "https://bytownbounce.ca/images/table-1.jpg",
  ],
  "table-&-bench": [
    "https://bytownbounce.ca/images/table&bench-1.jpg",
    "https://bytownbounce.ca/images/table&bench-2.jpg",
    "https://bytownbounce.ca/images/table&bench-3.jpg",
    "https://bytownbounce.ca/images/table&bench-4.jpg",
    "https://bytownbounce.ca/images/table&bench-5.jpg",
    "https://bytownbounce.ca/images/table&bench-6.jpg",
  ],
  "table & bench": [
    "https://bytownbounce.ca/images/table&bench-1.jpg",
    "https://bytownbounce.ca/images/table&bench-2.jpg",
    "https://bytownbounce.ca/images/table&bench-3.jpg",
    "https://bytownbounce.ca/images/table&bench-4.jpg",
    "https://bytownbounce.ca/images/table&bench-5.jpg",
    "https://bytownbounce.ca/images/table&bench-6.jpg",
  ],
  partytent: [
    "https://bytownbounce.ca/images/partytent-1.jpg",
    "https://bytownbounce.ca/images/partytent-2.jpg",
    "https://bytownbounce.ca/images/partytent-3.jpg",
    "https://bytownbounce.ca/images/partytent-4.jpg",
    "https://bytownbounce.ca/images/partytent-5.jpg",
    "https://bytownbounce.ca/images/partytent-6.jpg",
  ],
  "party tent": [
    "https://bytownbounce.ca/images/partytent-1.jpg",
    "https://bytownbounce.ca/images/partytent-2.jpg",
    "https://bytownbounce.ca/images/partytent-3.jpg",
    "https://bytownbounce.ca/images/partytent-4.jpg",
    "https://bytownbounce.ca/images/partytent-5.jpg",
    "https://bytownbounce.ca/images/partytent-6.jpg",
  ],
};

const productDescriptionsBySlug = {
  "classic-rainbow-castle": [
    "Commercial grade",
    "For kids and adults ages 3+",
    "Maximum weight per user 250lbs",
    "Total weight capacity of 1,500lbs",
  ],
  "white-castle": [
    "Commercial grade",
    "For kids and adults ages 3+",
    "Maximum weight per user 250lbs",
    "Total weight capacity of 500 lbs.",
  ],
  "mega-water-slides": [
    "Commercial Grade",
    "For kids and adults ages 3+",
    "Maximum weight per user 250lbs",
    "Total weight capacity of 600 lbs",
  ],
  "mega-slide-combo2": [
    "Commercial Grade",
    "For kids and adults ages 3+",
    "Maximum weight per user 250lbs",
    "Total weight capacity of 800lbs",
  ],
  "mega-slide-combo-2": [
    "Commercial Grade",
    "For kids and adults ages 3+",
    "Maximum weight per user 250lbs",
    "Total weight capacity of 800lbs",
  ],
  "mega-slide-combo": [
    "Commercial Grade",
    "For kids and adults ages 3 - 15",
    "Maximum weight per user 155lbs",
    "Total weight capacity 500lbs",
  ],
  "obstacle-course": [
    "Commercial Grade",
    "For kids and adults ages 3+",
    "Maximum weight per user 175lbs",
    "Total weight capacity 700lbs",
  ],
  "spiderman-toddler-bounce": [
    "Commercial Grade",
    "For kids ages 1 – 3 year olds",
    "Maximum weight per user: —",
    "Total weight capacity 200lbs",
  ],
  "unicorn-toddler-bounce": [
    "Commercial Grade",
    "For kids ages 1 – 3 year olds",
    "Maximum weight per user: —",
    "Total weight capacity 200lbs",
  ],
  "mickey-mouse-toddler-bounce": [
    "Commercial Grade",
    "For kids ages 1 – 3 year olds",
    "Maximum weight per user: —",
    "Total weight capacity 200lbs",
  ],
  "13ft-basketball-hoop-game": [
    "Commercial Grade",
    "Great for all ages – Multi height Hoop Layout",
    "Comes with 5 built in hoops at various height",
    "Includes 480 watt blower",
  ],
  "5-in-1-carnival-game": [
    "Dimensions: 20ft L x 20ft W x 13ft H",
    "For kids and adults",
    "Games: basketball hoop, Axe Throw, Football target, Toss Rings, Tic-Tac-Toe",
    "Perfect for all type of events",
  ],
  "10-ft-soccer-darts-board": [
    "Dimensions: 10ft x 6.2ft x 10ft",
    "For kids and adults of all ages",
    "Comes with 8 inflatable soccer balls",
    "Perfect for all event",
  ],
};

function getProductImages(product) {
  const slug = (product.attributes && product.attributes.slug) || "";
  const name = (product.attributes && product.attributes.name) || "";
  const slugKey = String(slug).trim().toLowerCase();
  const nameKey = String(name).trim().toLowerCase();
  const fromMap =
    hardcodedProductImages[slugKey] || hardcodedProductImages[nameKey];
  if (fromMap && Array.isArray(fromMap) && fromMap.length) return fromMap;
  const fallback = product.attributes && product.attributes.photo_url;
  return fallback ? [fallback] : [];
}

async function loadProducts() {
  const loadingEl = document.getElementById("loading");
  const errorEl = document.getElementById("error");
  const catalog = document.getElementById("catalog");

  try {
    if (loadingEl) loadingEl.style.display = "block";
    if (catalog) catalog.innerHTML = "";

    const response = await fetch("/.netlify/functions/get-booqable-products");

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const payload = await response.json();
    const collections = Array.isArray(payload)
      ? payload
      : payload.collections || [];
    const bundles = Array.isArray(payload) ? [] : payload.bundles || [];

    // console.log("Products:", collections);
    // console.log("Bundles:", bundles);
    if (loadingEl) loadingEl.style.display = "none";
    const sortCollections = [
      "Bounce House",
      "Slide Combos",
      "Water Slides",
      "Obstacle Course",
      "Toddler Soft Play Zone",
      "Inflatable Arcade Games",
      "Concession Rentals",
      "Party Rentals",
      "Party Packages – Save Big!",
    ];

    const collectionBgClass = {
      "Bounce House": "bg-bounce-house",
      "Water Slides": "bg-water-slide",
      "Slide Combos": "bg-slide-combo",
      "Obstacle Course": "bg-obstacle-course",
      "Toddler Soft Play Zone": "bg-toddler-zone",
      "Inflatable Arcade Games": "bg-inflammabe-arcade",
      "Concession Rentals": "bg-concessions-rentals",
      "Party Rentals": "bg-party-rentals",
    };

    const collectionIds = {
      "Bounce House": "bounce-house",
      "Water Slides": "water-slides",
      "Slide Combos": "slide-combos",
      "Obstacle Course": "obstacle-course",
      "Toddler Soft Play Zone": "toddler-zone",
      "Inflatable Arcade Games": "arcade-games",
      "Concession Rentals": "concessions",
      "Party Rentals": "party-rentals",
      "Party Packages – Save Big!": "packages",
    };

    const orderedCollections = collections
      .sort(
        (a, b) =>
          sortCollections.indexOf(a.name) - sortCollections.indexOf(b.name),
      )
      .filter((item) => item.name !== "All products");

    orderedCollections.forEach((collection) => {
      const section = document.createElement("section");
      const sectionId = collectionIds[collection.name] || collection.slug || "";
      if (sectionId) section.id = sectionId;
      section.classList.add(collectionBgClass[collection.name] || "bg-default");
      section.style.padding = "80px 20px";

      const title = document.createElement("h2");
      title.className = "section-title";
      title.textContent = collection.name;
      section.appendChild(title);

      const gallery = document.createElement("div");
      gallery.className = "gallery";

      collection.products.forEach((product) => {
        const card = document.createElement("div");
        card.className = "card";
        const images = getProductImages(product);
        card.dataset.images = JSON.stringify(images);

        const img = document.createElement("img");
        img.src =
          images[0] ||
          (product.attributes && product.attributes.photo_url) ||
          "";
        img.alt = product.attributes.name;
        img.className = "cover-image";
        card.appendChild(img);

        const info = document.createElement("div");
        info.style.padding = "20px";

        const h3 = document.createElement("h3");
        h3.textContent = product.attributes.name;
        info.appendChild(h3);

        const desc = document.createElement("p");
        desc.innerHTML =
          product.attributes.description || product.attributes.excerpt || "";
        info.appendChild(desc);

        const price = document.createElement("p");
        price.className = "price";
        const priceCents = product.attributes.base_price_in_cents || 0;
        const pricePeriod = product.attributes.price_period || "day";
        price.textContent = `$${priceCents / 100}/${pricePeriod}`;
        const hst = document.createElement("span");
        hst.textContent = "+ HST";
        price.appendChild(document.createTextNode(" "));
        price.appendChild(hst);
        info.appendChild(price);

        const thumbsDiv = document.createElement("div");
        thumbsDiv.className = "gallery-thumbs";
        images.forEach((url, idx) => {
          const t = document.createElement("img");
          t.src = url;
          t.alt = `${product.attributes.name} ${idx + 1}`;
          t.dataset.index = String(idx);
          thumbsDiv.appendChild(t);
        });
        info.appendChild(thumbsDiv);

        const btnWrapper = document.createElement("div");
        btnWrapper.className = "btn-wrapper";
        const bouncyBtn = document.createElement("button");
        bouncyBtn.className = "bouncy-btn";
        bouncyBtn.textContent = "Add to Cart";
        btnWrapper.appendChild(bouncyBtn);
        const booqableBtnWrapper = document.createElement("div");
        booqableBtnWrapper.className = "booqable-btn-wrapper";
        booqableBtnWrapper.addEventListener("click", () => {
          showToast("Item added to cart!");
        });

        const booqableBtn = document.createElement("div");
        booqableBtn.className = "booqable-product-button";
        const booqableId =
          (product.attributes && product.attributes.slug) || product.id;
        booqableBtn.setAttribute("data-id", booqableId);
        booqableBtnWrapper.appendChild(booqableBtn);
        btnWrapper.appendChild(booqableBtnWrapper);
        info.appendChild(btnWrapper);

        card.appendChild(info);
        gallery.appendChild(card);
      });

      section.appendChild(gallery);
      if (catalog) catalog.appendChild(section);
    });

    if (window && window.Booqable) {
      const b = window.Booqable;
      const fns = [b.init, b.setup, b.mount, b.render, b.load].filter(
        (fn) => typeof fn === "function",
      );
      fns.some((fn) => {
        try {
          fn.call(b);
          return true;
        } catch (e) {
          return false;
        }
      });
    }
  } catch (error) {
    console.error("Error loading products:", error);
    if (loadingEl) loadingEl.style.display = "none";
    if (errorEl) errorEl.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", loadProducts);
document.addEventListener("DOMContentLoaded", injectProductDescriptions);
document.addEventListener("DOMContentLoaded", initCardImageDatasets);

function getProductSlugFromCard(card) {
  const buttons = card.querySelectorAll("button[onclick]");
  for (const btn of buttons) {
    const onclick = btn.getAttribute("onclick") || "";
    const match = onclick.match(/booqableshop\.com\/products\/([a-z0-9-]+)/i);
    if (match && match[1]) return match[1].toLowerCase();
  }
  return null;
}

function injectProductDescriptions() {
  const cards = document.querySelectorAll(".card:not(.package-card)");
  cards.forEach((card, index) => {
    if (
      card.querySelector("[data-description-toggle]") ||
      card.querySelector(".product-description-overlay")
    ) {
      return;
    }

    const slug = getProductSlugFromCard(card);
    if (!slug) return;

    const descriptionLines = productDescriptionsBySlug[slug];
    if (!descriptionLines || !descriptionLines.length) return;

    const content =
      card.querySelector('div[style*="padding: 20px"]') ||
      card.querySelector("div");
    if (!content) return;

    const overlayId = `desc-${slug}-${index}`;

    const toggleBtn = document.createElement("button");
    toggleBtn.type = "button";
    toggleBtn.className = "desc-toggle-btn";
    toggleBtn.setAttribute("data-description-toggle", "");
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.setAttribute("aria-controls", overlayId);
    toggleBtn.textContent = "Product Description";

    const priceEl = content.querySelector(".price");
    if (priceEl && priceEl.parentNode) {
      priceEl.insertAdjacentElement("afterend", toggleBtn);
    } else {
      content.appendChild(toggleBtn);
    }

    const overlay = document.createElement("div");
    overlay.className = "product-description-overlay";
    overlay.id = overlayId;
    overlay.setAttribute("aria-hidden", "true");

    const header = document.createElement("div");
    header.className = "product-description-header";

    const title = document.createElement("div");
    title.className = "product-description-title";
    title.textContent = "Product Description";

    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "product-description-close";
    closeBtn.setAttribute("data-description-close", "");
    closeBtn.setAttribute("aria-label", "Close description");
    closeBtn.innerHTML = "&times;";

    header.appendChild(title);
    header.appendChild(closeBtn);

    const list = document.createElement("ul");
    list.className = "product-description-list";
    descriptionLines.forEach((line) => {
      const li = document.createElement("li");
      li.textContent = line;
      list.appendChild(li);
    });

    overlay.appendChild(header);
    overlay.appendChild(list);
    card.appendChild(overlay);
  });
}

function initCardImageDatasets() {
  document.querySelectorAll(".card:not(.package-card)").forEach((card) => {
    if (card.dataset.images) return;

    const cover = card.querySelector("img.cover-image");
    const thumbs = Array.from(card.querySelectorAll(".gallery-thumbs img"));
    const urls = [];

    const addUrl = (url) => {
      if (!url) return;
      const normalized = String(url).trim();
      if (!normalized) return;
      if (!urls.includes(normalized)) urls.push(normalized);
    };

    if (cover) addUrl(cover.currentSrc || cover.src);
    thumbs.forEach((img) => addUrl(img.currentSrc || img.src));

    if (!urls.length) return;

    card.dataset.images = JSON.stringify(urls);

    thumbs.forEach((img, idx) => {
      const src = String(img.currentSrc || img.src || "").trim();
      const urlIndex = urls.indexOf(src);
      img.dataset.index = String(urlIndex >= 0 ? urlIndex : idx);
    });
  });
}

function scrollToTop(e) {
  if (e && typeof e.preventDefault === "function") e.preventDefault();
  closeMenu();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateHeaderScrolledState() {
  const header = document.querySelector("header");
  if (!header) return;
  const isScrolled = window.scrollY > 10;
  header.classList.toggle("scrolled", isScrolled);
}

updateHeaderScrolledState();
window.addEventListener("scroll", updateHeaderScrolledState, { passive: true });

const headerEl = document.querySelector("header");
if (headerEl) {
  headerEl.addEventListener("click", (e) => {
    const interactive = e.target.closest(
      "a,button,input,textarea,select,label,.menu-btn,.nav-menu,.dropdown-content,.cart-icon",
    );
    if (interactive) return;
    scrollToTop(e);
  });
}

const eventDateInput = document.getElementById("event-date");
if (eventDateInput) {
  eventDateInput.addEventListener("focus", () => {
    if (eventDateInput.type !== "date") eventDateInput.type = "date";
    if (typeof eventDateInput.showPicker === "function") {
      try {
        eventDateInput.showPicker();
      } catch (e) {}
    }
  });
  eventDateInput.addEventListener("blur", () => {
    if (!eventDateInput.value) eventDateInput.type = "text";
  });
}

document.addEventListener("click", function (e) {
  const navMenu = document.getElementById("nav-menu");
  const menuBtn = document.querySelector(".menu-btn");
  const dropdown = document.getElementById("dropdown");

  if (
    window.innerWidth <= 1024 &&
    navMenu &&
    navMenu.classList.contains("active") &&
    !navMenu.contains(e.target) &&
    !(menuBtn && menuBtn.contains(e.target))
  ) {
    closeMenu();
    return;
  }

  if (dropdown && !dropdown.contains(e.target)) {
    dropdown.classList.remove("open");
  }
});

function setProductDescriptionOpen(overlay, toggleBtn, isOpen) {
  overlay.classList.toggle("is-open", isOpen);
  overlay.setAttribute("aria-hidden", String(!isOpen));
  if (toggleBtn) toggleBtn.setAttribute("aria-expanded", String(isOpen));
}

document.addEventListener("click", (e) => {
  const toggleBtn = e.target.closest("[data-description-toggle]");
  if (toggleBtn) {
    const overlayId = toggleBtn.getAttribute("aria-controls");
    const overlay = overlayId ? document.getElementById(overlayId) : null;
    if (!overlay) return;
    const isOpen = overlay.classList.contains("is-open");
    setProductDescriptionOpen(overlay, toggleBtn, !isOpen);
    return;
  }

  const closeBtn = e.target.closest("[data-description-close]");
  if (closeBtn) {
    const overlay = closeBtn.closest(".product-description-overlay");
    if (!overlay) return;
    const card = overlay.closest(".card");
    const toggleBtn = card
      ? card.querySelector(
          `[data-description-toggle][aria-controls="${overlay.id}"]`,
        )
      : null;
    setProductDescriptionOpen(overlay, toggleBtn, false);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  document
    .querySelectorAll(".product-description-overlay.is-open")
    .forEach((overlay) => {
      const card = overlay.closest(".card");
      const toggleBtn = card
        ? card.querySelector(
            `[data-description-toggle][aria-controls="${overlay.id}"]`,
          )
        : null;
      setProductDescriptionOpen(overlay, toggleBtn, false);
    });
});

function toggleMenu() {
  if (window.innerWidth > 1024) return;
  const navMenu = document.getElementById("nav-menu");
  const overlay = document.getElementById("nav-overlay");
  if (navMenu) navMenu.classList.toggle("active");
  if (overlay) overlay.classList.toggle("active");
}

function toggleProductMenu(forceClose) {
  const dropdown = document.getElementById("dropdown");
  if (!dropdown) return;
  if (forceClose) {
    dropdown.classList.remove("open");
    return;
  }
  dropdown.classList.toggle("open");
}

function closeMenu() {
  const navMenu = document.getElementById("nav-menu");
  const overlay = document.getElementById("nav-overlay");
  const dropdown = document.getElementById("dropdown");
  if (navMenu) navMenu.classList.remove("active");
  if (overlay) overlay.classList.remove("active");
  if (dropdown) dropdown.classList.remove("open");
}

document.querySelectorAll(".nav-menu a").forEach((link) => {
  if (!link.classList.contains("dropbtn")) {
    link.addEventListener("click", closeMenu);
  }
});

document
  .querySelectorAll(".package-booqable-btn-wrapper")
  .forEach((wrapper) => {
    wrapper.addEventListener("click", () => {
      showToast("Item added to cart!");
    });
  });

// Modal Logic
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const close = document.getElementById("close");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const counter = document.getElementById("counter");

let currentGalleryImages = [];
let currentIndex = 0;

document.addEventListener("click", (e) => {
  const thumb = e.target.closest(".gallery-thumbs img");
  const coverImage = e.target.closest("img.cover-image");
  if (!thumb && !coverImage) return;

  const card = e.target.closest(".card");
  if (!card) return;

  let images = [];
  try {
    images = JSON.parse(card.dataset.images || "[]");
  } catch (err) {
    images = [];
  }
  if (!Array.isArray(images) || images.length === 0) return;

  currentGalleryImages = images;
  currentIndex = thumb ? Number(thumb.dataset.index || 0) : 0;
  openModal();
});

function openModal() {
  modal.classList.add("active");
  updateImage();
}

function closeModal() {
  modal.classList.remove("active");
}

function updateImage() {
  modalImg.src = currentGalleryImages[currentIndex];
  if (counter)
    counter.textContent = `${currentIndex + 1} / ${
      currentGalleryImages.length
    }`;
}

function showNext() {
  currentIndex = (currentIndex + 1) % currentGalleryImages.length;
  updateImage();
}

function showPrev() {
  currentIndex =
    (currentIndex - 1 + currentGalleryImages.length) %
    currentGalleryImages.length;
  updateImage();
}

if (close) close.addEventListener("click", closeModal);
if (next) next.addEventListener("click", showNext);
if (prev) prev.addEventListener("click", showPrev);

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

document.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("active")) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowRight") showNext();
  if (e.key === "ArrowLeft") showPrev();
});

// Cart Logic
let cart = [];
let prices = {
  "Classic Rainbow Castle – $199": 199,
  "Mega Slide Combo – $299": 299,
  "Spiderman Toddler Bounce – $179": 179,
  "Unicorn Toddler Bounce – $179": 179,
  "Mickey Mouse Toddler Bounce – $179": 179,
  "Mega Obstacle Course – $449": 449,
  "Mega Water Slides – $399": 399,
  "White Castle – $349": 349,
  "13ft Basketball Hoop Game – $149": 149,
  "5-IN-1 Carnival Game – $199": 199,
  "10 ft Soccer Darts Board – $179": 179,
  "Snow Cone Machine": 99,
  "Popcorn Machine": 89,
  "Cotton Candy Machine": 109,
  "6-ft Folding Table": 12,
  "Table & Bench": 20,
  "Party Tent": 105,
  "Basic Bounce Package": 289,
  "Ultimate Party Package": 449,
  "Toddler Dream Package": 329,
};

function toggleCart() {
  document.getElementById("cart-sidebar").classList.toggle("active");
}

function addToCart(item, price) {
  cart.push(item);
  updateCart();
  showToast("Item added to cart!");
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "toast show";
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}

const bookingForm = document.getElementById("booking-form");
if (bookingForm) {
  bookingForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = bookingForm.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.textContent : "";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
    }

    try {
      const data = new FormData(bookingForm);
      const payload = Object.fromEntries(data.entries());

      const res = await fetch("/.netlify/functions/submit-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const j = await res.json().catch(() => null);
        const msg =
          (j && (j.error || j.message)) ||
          "Could not send booking request. Please try again.";
        throw new Error(msg);
      }

      showToast("Booking request sent!");
      bookingForm.reset();
      const eventDate = document.getElementById("event-date");
      if (eventDate && eventDate.type !== "text") eventDate.type = "text";
    } catch (err) {
      showToast(err && err.message ? err.message : "Submission failed.");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    }
  });
}

function updateCart() {
  const sidebarItems = document.getElementById("cart-sidebar-items");
  const sidebarTotal = document.getElementById("cart-sidebar-total");
  const badge = document.getElementById("cart-badge");

  if (badge) badge.textContent = cart.length;

  const sum = cart.reduce((a, c) => a + (prices[c] || 0), 0);
  const totalStr = "$" + sum;

  if (cart.length === 0) {
    sidebarItems.innerHTML =
      '<p style="text-align:center;color:#666;margin-top:20px;">Your cart is empty.</p>';
  } else {
    sidebarItems.innerHTML = cart
      .map(
        (item, index) => `
        <div class="cart-sidebar-item">
          <span>${item}</span>
          <span class="cart-remove-btn" onclick="removeFromCart(${index})"><i class="fas fa-trash"></i></span>
        </div>
      `,
      )
      .join("");
  }
  sidebarTotal.textContent = totalStr;

  document.getElementById("cart-data").value = cart.join(" + ");

  const summaryItems = document.getElementById("cart-items");
  const summaryTotal = document.getElementById("cart-total");
  const summaryDiv = document.getElementById("cart-summary");

  if (summaryDiv) {
    if (cart.length === 0) {
      summaryDiv.style.display = "none";
    } else {
      summaryDiv.style.display = "block";
      if (summaryItems)
        summaryItems.innerHTML = cart.map((i) => `• ${i}`).join("<br>");
      if (summaryTotal) summaryTotal.textContent = totalStr;
    }
  }
}

// function clearCart() {
//   cart = [];
//   updateCart();
// }

// function goToCheckout() {
//   toggleCart();
//   document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
// }

// document.getElementById("pay-deposit").addEventListener("click", async () => {
//   try {
//     const total = document
//       .getElementById("cart-sidebar-total")
//       .textContent.slice(1);
//     const button = document.getElementById("pay-deposit");
//     button.disabled = true;
//     button.textContent = "Processing...";

//     const res = await fetch("/.netlify/functions/create-checkout-session", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ cartTotal: total, cartItems: cart }),
//     });

//     if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

//     const { sessionId } = await res.json();
//     const { error } = await stripe.redirectToCheckout({ sessionId });

//     if (error) {
//       console.error("Stripe redirect error:", error);
//       alert("Payment failed: " + error.message);
//       button.disabled = false;
//       button.textContent = "Pay Deposit";
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     alert("Something went wrong. Please try again.");
//     const button = document.getElementById("pay-deposit");
//     button.disabled = false;
//     button.textContent = "Pay Deposit";
//   }
// });
