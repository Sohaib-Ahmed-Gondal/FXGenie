const axios = require('axios');

const getAISuggestion = async (features) => {
  const response = await axios.post('http://localhost:5001/predict', { features });
  return response.data.suggestion;
};

module.exports = { getAISuggestion };