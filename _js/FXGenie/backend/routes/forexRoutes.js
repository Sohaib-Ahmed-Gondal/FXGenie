const express = require('express');
const router = express.Router();
const forexService = require('../services/forexService');

// Route to get current Forex rates
router.get('/rates', async (req, res) => {
    try {
        const rates = await forexService.getForexRates();
        res.status(200).json(rates);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Forex rates', error: error.message });
    }
});

// Route to convert currency
router.post('/convert', async (req, res) => {
    const { fromCurrency, toCurrency, amount } = req.body;
    try {
        const convertedAmount = await forexService.convertCurrency(fromCurrency, toCurrency, amount);
        res.status(200).json({ convertedAmount });
    } catch (error) {
        res.status(500).json({ message: 'Error converting currency', error: error.message });
    }
});

module.exports = router;