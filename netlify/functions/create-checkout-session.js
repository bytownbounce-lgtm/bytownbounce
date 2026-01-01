const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const api_key = process.env.STRIPE_SECRET_KEY;

exports.handler = async (event) => {
  console.log("=== ENVIRONMENT CHECK ===");
  console.log("STRIPE_SECRET_KEY exists?", !!process.env.STRIPE_SECRET_KEY);
  console.log(
    "STRIPE_SECRET_KEY length:",
    process.env.STRIPE_SECRET_KEY?.length
  );
  console.log(
    "STRIPE_SECRET_KEY starts with:",
    process.env.STRIPE_SECRET_KEY?.substring(0, 7)
  );
  console.log("========================");

  console.log("Function called with method:", event.httpMethod);
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const { cartTotal, cartItems } = JSON.parse(event.body);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: "price_1Sjy6lFB9Y5lqPP0FgOIE3NL",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url:
        "https://bytownbounce.ca/thankyou.html?paid=true&session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://bytownbounce.ca/?canceled=true",
      metadata: {
        cart: cartItems ? cartItems.join(" | ") : "",
        cartTotal: cartTotal,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    };
  } catch (error) {
    console.error("Stripe error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
