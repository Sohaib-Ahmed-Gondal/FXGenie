const express = require('express');
const { jazzCashPayment } = require('../services/jazzCashService');
const { createRazorpayOrder } = require('../services\razorpayService');
const router = express.Router();

router.post('/jazzcash', async (req, res) => {
  const { amount, orderId } = req.body;
  try {
    const response = await jazzCashPayment(amount, orderId);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/razorpay', async (req, res) => {
  const { amount, currency } = req.body;
  try {
    const order = await createRazorpayOrder(amount, currency);
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;