netlify/
functions/
create-checkout-session.js: const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
const { cartTotal, cartItems } = JSON.parse(event.body);

const session = await stripe.checkout.sessions.create({
payment_method_types: ['card'],
line_items: [{
price: 'prod_TakclkKCOtDlfm', // ← replace with your real Price ID
quantity: 1,
}],
mode: 'payment',
success_url: 'https://bytownbounce.ca/thankyou.html?paid=true',
cancel_url: 'https://bytownbounce.ca/',
metadata: { cart: cartItems.join(' | ') }
});

return {
statusCode: 200,
body: JSON.stringify({ sessionId: session.id }),
};
};