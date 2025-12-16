const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { cartTotal, cartItems } = JSON.parse(event.body);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price: 'price_1SdZ75F3P73ln1DXMhYFJuep', // ← REPLACE WITH YOUR ACTUAL PRICE ID (price_1...)
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'https://bytownbounce.ca/thankyou.html?paid=true',
      cancel_url: 'https://bytownbounce.ca/',
      metadata: { cart: cartItems ? cartItems.join(' | ') : '' }
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};