const { TOKEN, SERVER_URL } = process.env;
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;

const axios = require("axios");

async function mainMenu(chatId) {

    try {
      await axios.post(`${TELEGRAM_API}/sendMessage`, {
        chat_id: chatId,
        text: "Welcome, How can I help you",
        reply_markup: {
  
          keyboard: [
            
            [{ text: "FAQ" }, { text: "Any Question" }],
            [{text:"Services"},{text:"Important Notes"}],
            [{text:"Video Guide"},{text:"📘 Change Language"}]
        ],
          resize_keyboard: false,
        },
      });
    } catch (e) {
      console.log(e);
    // }
  }

  
}
async function FAQMenu(chatId) {
  try {
    await axios.post(`${TELEGRAM_API}/sendMessage`, {
      chat_id: chatId,
      text: "Select a catagory",
      reply_markup: {
        keyboard: [
          [
            { text: "✅ Interest Free Banking FAQ" },
            { text: "✅ Online Banking FAQ" },
            { text: "✅ Card Banking FAQ" },
          ],
          [{ text: "🎞Back To MainMenu" }, {text:"📘 Change language"}],
        ],
        resize_keyboard: false,
      },
    });
  } catch (e) {
    console.log(e);
  }
}
async function ServicesMenu(chatId) {
  try {
    await axios.post(`${TELEGRAM_API}/sendMessage`, {
      chat_id: chatId,
      text: "Please select a Service",
      reply_markup: {
        keyboard: [
          [{ text: "🎞Back To MainMenu" }, {text:"📘 Change language"}],
          [
            {text:"⚙️ Fund transfer"}
          ,
            {text:"⚙️ Account information "}
          ],
          [
            {text:"⚙️ Loan"}
          ,
            {text:"⚙️ Payments"}
          ],
          [
            {text:"⚙️ Message"}
          ,
            {text:"⚙️ Locate us"}
          ],
          
        ],
        resize_keyboard: false,
      },
    });
  } catch (e) {
    console.log(e);
  }
}
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
        keyboard: [[{ text: "🎞Back To MainMenu" }, {text:"📘 Change language"}]],
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
      text: "Please pick a language( እባክዎን ቋንቋ ይምረጡ )",
      reply_markup: {
        keyboard: [[{ text: "English" }, { text: "፨ አማርኛ" }],[{ text: "◌ ትግርኛ" }, { text: "A/Oromo" }]],
        resize_keyboard: false,
      },
    });
  } catch (e) {
    console.log(e);
  }
}

async function notifMessage(chatId) {
  try {
    await axios.post(`${TELEGRAM_API}/sendMessage`, {
      chat_id: chatId,
      text: "You will get notification from Bank Of Abyssinia",
      reply_markup: {
        keyboard: [[{ text: "🎞Back To MainMenu" }, {text:"📘 Change language"}]],
        resize_keyboard: false,
      },
    });
  } catch (e) {
    console.log(e);
  }
}

async function balanceMenu(chatId) {
  try {
    await axios.post(`${TELEGRAM_API}/sendMessage`, {
      chat_id: chatId,
      text: "Please share your contact to get your account information",
      reply_markup: {

        keyboard: [
          [{ text: "👇share contact", request_contact:true}],
          [{ text: "🎞Back To MainMenu" }, {text:"📘 Change language"}],
      ],
        resize_keyboard: false,
      },
    });
  } catch (e) {
    console.log(e);
  }
}

async function videoGuide(chatId, question) {
  try {
    // if (question.toLowerCase().includes("✅ interest")) {
      await axios.post(`${TELEGRAM_API}/sendMessage`, {
        chat_id: chatId,
        text: "Please select a service",
        reply_markup: {
          keyboard: [
            [{ text: "🎞Back To MainMenu" }, { text: "📘 Change language" }],
            [{ text: "📽️ How to Onboard my self on Apollo"}],
          [{ text: "📽️ How to get the salary advance"}],
          [{ text: "📽️ How to close the Apollo account"}],
          [{ text: "📽️ How to change Sign in option on Apollo"}],
          [{ text: "📽️ How to change PIN"}],
          [{ text: "📽️ How to change profile picture on Apollo"}],
          [{ text: "📽️ How to change language on Apollo"}],
          [{ text: "📽️ How to transfer money using Ethswitch on Apollo"}],
          [{ text: "📽️ How to make transfer using RGTS on Apollo"}],
          [{ text: "📽️ How to make transaction using Telebirr"}],
          [{ text: "📽️ How to make transaction using ATM"}],
          [{ text: "📽️ How to buy airtime "}],
          
        ],
          resize_keyboard: false,
        },
      });
    
  } catch (e) {
    console.log(e);
  }
}

async function ImpoMenu(chatId, question) {
  try {
    // if (question.toLowerCase().includes("✅ interest")) {
      await axios.post(`${TELEGRAM_API}/sendMessage`, {
        chat_id: chatId,
        text: "Please select",
        reply_markup: {
          keyboard: [
            [{ text: "🎞Back To MainMenu" }, { text: "📘 Change language" }],
            [{ text: "📃 What is Apollo"}],
          [{ text: "📃 Who Can Use Apollo"}],
          [{ text: "📃 Special offers provided only with Apollo Account"}],

          [{ text: "📃 Prerequisites for Apollo registrations"}],
          [{ text: "📃 How Do I Deposit Money to My Apollo Saving Account"}],
          [{ text: "📃 How Do I Pay Bills Using My Apollo Saving Account"}],

          [{ text: "📃 What Type of Card does Apollo Offer"}],
          [{ text: "📃 How Can I Get My Apollo Debit Card"}],
          [{ text: "📃 Apollo Per and Daily Transaction Limit"}],

          [{ text: "📃 Where Will I Get Help If I Need It"}],
          [{ text: "📃 Why is my user id locked and how can I unblock my Apollo user"}],
          [{ text: "📃 Is It Secure"}],
          [{ text: "📃 Why is there a One-Time-PIN (OTP)"}],
          
        ],
          resize_keyboard: false,
        },
      });
    
  } catch (e) {
    console.log(e);
  }
}

module.exports = { mainMenu, FAQMenu, sendOrdinaryMessage,languageMenu,notifMessage,balanceMenu,ServicesMenu,videoGuide,ImpoMenu };
