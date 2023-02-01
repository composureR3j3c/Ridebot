const { TOKEN, SERVER_URL } = process.env;
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;

const axios = require("axios");

async function sendOrdinaryMessage(chatId, responseMessage, replyMessageID) {
  if (responseMessage ==null || responseMessage =="") {
    return
  }
  try {
     
    await axios.post(`${TELEGRAM_API}/sendMessage`, {
      chat_id: chatId,
      text: responseMessage,
      reply_to_message_id: replyMessageID,
      reply_markup: {
        force_reply: true,
        keyboard: [[{ text: "Order now" }], [{ text: "support" }]],
      },
    });
  } catch (e) {
    console.log(e);
  }
}
async function sendLocationMessage(chatId, lat,lon) {
  if (responseMessage ==null || responseMessage =="") {
    return
  }
  try {
     
    await axios.post(`${TELEGRAM_API}/sendLocation`, {
      chat_id: chatId,
      latitude:lat,
      longitude:lon,
    });
  } catch (e) {
    console.log(e);
  }
}
async function sendContactMessage(chatId, responseMessage, replyMessageID) {
  if (responseMessage ==null || responseMessage =="") {
    return
  }
  try {
     
    await axios.post(`${TELEGRAM_API}/sendMessage`, {
      chat_id: chatId,
      text: responseMessage,
      reply_to_message_id: replyMessageID,
      reply_markup: {
        force_reply: true,
        keyboard: [[{ text: "Order now" }], [{ text: "support" }]],
      },
    });
  } catch (e) {
    console.log(e);
  }
}
async function languageMenu(chatId) {
  try {
    await axios.post(`${TELEGRAM_API}/sendMessage`, {
      chat_id: chatId,
      text: "Welcome, Please select an option from the",
      reply_markup: {
        keyboard: [[{ text: "Order now" }], [{ text: "support" }]],
        resize_keyboard: false,
      },
    });
  } catch (e) {
    console.log(e);
  }
}

module.exports = {sendOrdinaryMessage,languageMenu,sendContactMessage,sendLocationMessage };
