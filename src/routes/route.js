const { CORB_URL } = process.env;
const axios = require(`axios`);
const { sendCaseQuestion, assignAnswer } = require("../main/buildcase");
var {
  sendOrdinaryMessage,
  
  languageMenu,
    
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


      if (text.toLowerCase().includes("support")) {
        sendOrdinaryMessage(chatId, "Coming soon...", replyMessageID);
      }
      else if (text.toLowerCase().includes("order")) {
        var questionDate = req.body.message.date;
        responseMessage = "Name?";
        if (responseMessage != "") {
          sendCaseQuestion(chatId, responseMessage);
        }
      }
     
      else if (
        (req.body.message?.reply_to_message)
      ) {
        console.log("dsfghjkl")
        if (req.body.message?.contact?.phone_number != null) {
          const chatId = req.body.message.chat.id;
          const text = req.body.message.contact.phone_number;

          assignAnswer("KBDphone", chatId, text, "");


        }
        else {


          var question = req.body.message?.reply_to_message
            ? req.body.message.reply_to_message.text : ""



          var answerDate = req.body.message.date;
          const replyMessageID = req.body.message.message_id;

          questionDate = req.body.message.reply_to_message?.date;
          if (answerDate - questionDate >= 500) {
            responseMessage = "Sorry, your time has Expired!";
            // console.log("name else if if")
            if (responseMessage != "") {
              sendOrdinaryMessage(chatId, responseMessage, replyMessageID);
            }
          }
          else {
            assignAnswer(question, chatId, text, replyMessageID);
          }
        }
      }

      else {
        languageMenu(chatId);
      }
    }
    else if (req.body.message?.contact?.phone_number != null) {
      console.log("dsfghjkl")
      const chatId = req.body.message.chat.id;
      const text = req.body.message.contact.phone_number;
      
      assignAnswer("KBDphone", chatId, text, "");


    }
    else if (req.body.message?.location != null) {
      console.log("loco")
      const chatId = req.body.message.chat.id;
      const text = req.body.message.location.latitude;
      const long = req.body.message.location.longitude;
      
      assignAnswer("location", chatId, text, "",long);


    }
  }
  catch (e) {
    console.log(e)
  }
}

module.exports = { postFromTelegram }