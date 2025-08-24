const axios = require('axios');
function notifyAdmin(message) {
  const token = process.env.TELEGRAM_TOKEN;
  const chatId = process.env.ADMIN_CHAT_ID;
  axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
    chat_id: chatId,
    text: message
  });
}
module.exports = { notifyAdmin };
