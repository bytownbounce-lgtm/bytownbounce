const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const api_key = process.env.STRIPE_SECRET_KEY;
console.log("Using Stripe API Key:", api_key ? "Loaded" : "Not Loaded");

exports.handler = async (event) => {
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
