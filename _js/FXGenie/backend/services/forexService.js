const axios = require('axios');

const fetchForexRates = async () => {
  try {
    const response = await axios.get('https://api.exchangeratesapi.io/latest', {
      params: { access_key: process.env.FOREX_API_KEY },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch forex rates');
  }
};

module.exports = { fetchForexRates };