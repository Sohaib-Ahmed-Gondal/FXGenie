const paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: 'sandbox', // or 'live'
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET,
});

const createPayPalPayment = async (amount, currency) => {
  const payment = {
    intent: 'sale',
    payer: { payment_method: 'paypal' },
    transactions: [{ amount: { total: amount, currency } }],
    redirect_urls: {
      return_url: 'http://localhost:5000/success',
      cancel_url: 'http://localhost:5000/cancel',
    },
  };

  return new Promise((resolve, reject) => {
    paypal.payment.create(payment, (error, payment) => {
      if (error) reject(error);
      else resolve(payment);
    });
  });
};

module.exports = { createPayPalPayment };