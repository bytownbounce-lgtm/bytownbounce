const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { cartTotal, cartItems } = JSON.parse(event.body);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
  price: 'price_1SepjSFB9Y5lqPP0S3QrP1zQ',
  quantity: 1,
  description: `Deposit for rental (estimated total $${cartTotal || 'unknown'})`,
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