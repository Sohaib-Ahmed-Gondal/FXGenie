const axios = require('axios');
const crypto = require('crypto');

const jazzCashPayment = async (amount, orderId) => {
  const merchantId = process.env.JAZZCASH_MERCHANT_ID;
  const password = process.env.JAZZCASH_PASSWORD;
  const integritySalt = process.env.JAZZCASH_INTEGRITY_SALT;
  const returnUrl = process.env.JAZZCASH_RETURN_URL;

  const dateTime = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14);
  const transactionRef = `T${dateTime}`;

  const data = {
    pp_Version: '1.1',
    pp_TxnType: 'MWALLET',
    pp_Language: 'EN',
    pp_MerchantID: merchantId,
    pp_Password: password,
    pp_Amount: amount * 100, // Amount in paisa
    pp_TxnRefNo: transactionRef,
    pp_BillReference: orderId,
    pp_Description: 'Payment for Forex Services',
    pp_ReturnURL: returnUrl,
    pp_TxnDateTime: dateTime,
    pp_SecureHash: '',
  };

  // Generate Secure Hash
  const hashString = `${integritySalt}&${Object.values(data).join('&')}`;
  data.pp_SecureHash = crypto.createHash('sha256').update(hashString).digest('hex');

  try {
    const response = await axios.post('https://sandbox.jazzcash.com.pk/ApplicationAPI/API/2.0/Purchase/DoMWalletTransaction', data);
    return response.data;
  } catch (error) {
    throw new Error('JazzCash payment failed');
  }
};

module.exports = { jazzCashPayment };