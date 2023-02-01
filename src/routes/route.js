const { CORB_URL } = process.env;
const axios = require(`axios`);
var {
  sendOrdinaryMessage,
  FAQMenu,
  mainMenu,
  languageMenu,
  notifMessage, 
  balanceMenu,
  ServicesMenu,
  videoGuide,
  ImpoMenu,
} = require("../main/menus");

async function postFromTelegram(req, res) {
    try {
      res.sendStatus(200);
      if (req.body.message?.text != null) {
        const chatId = req.body.message.chat.id;

        var text = req.body.message.text;
        text = text.replace(/\?/g, "");
  
        const replyMessageID = req.body.message.message_id;
        console.log(text);
  
        if (text.toLowerCase().includes("start") || text.includes("📘")) {
          languageMenu(chatId);
        }
      }
    }
    catch(e){
        console.log(e)
    }
}