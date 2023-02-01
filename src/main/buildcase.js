const { TOKEN, } = process.env;
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;
const axios = require('axios');
const { sendOrdinaryMessage, sendContactMessage, sendLocationMessage } = require('./menus');

var name = [];
var phone = [];
var lon = [];
var lat = [];

async function vaidationFailed(chatId, replyMessageID, field) {
    try {
        await axios.post(`${TELEGRAM_API}/sendMessage`, {
            chat_id: chatId,
            text: `Invalid ${field}`,
            reply_to_message_id: replyMessageID,
            reply_markup: {
                keyboard: [[{ text: "Order now" }], [{ text: "support" }]],

                resize_keyboard: false,
            }
        });
        try {
            delete name[chatId];
            delete phone[chatId];
            delete lon[chatId];
            delete lat[chatId];
            console.log(name);
        } catch (error) {

        }

    } catch (e) {
        console.log(e);
    }
}
async function sendCaseQuestion(chatId, responseMessage) {
    try {
        await axios.post(`${TELEGRAM_API}/sendMessage`, {
            chat_id: chatId,
            text: `Please enter your ${responseMessage}`,
            reply_markup: {
                force_reply: true,
            },
        });

    } catch (e) {
        console.log(e);
    }
}

async function getPhoneNumber(chatId, responseMessage) {
    try {
        await axios.post(`${TELEGRAM_API}/sendMessage`, {
            chat_id: chatId,
            text: `Please share your Phone Number by clicking the button`,
            reply_markup: {
                force_reply: true,

                keyboard: [[{ text: "👇Click here to share your Phone Number", request_contact: true }],
                [{ text: "cancel" }]],
            },
        });

    } catch (e) {
        console.log(e);
    }
}
async function getlocation(chatId, responseMessage) {
    try {
        await axios.post(`${TELEGRAM_API}/sendMessage`, {
            chat_id: chatId,
            text: `Please share your Location by clicking the button`,
            reply_markup: {
                force_reply: true,

                keyboard: [[{ text: "👇Click here to share your Location", request_location: true }],
                [{ text: "cancel" }]],
            },
        });

    } catch (e) {
        console.log(e);
    }
}
async function assignAnswer(question, chatId, text, replyMessageID,long) {
    console.log("logging assign Answer")
    // var answer;

    if (question.toLowerCase().includes("name")) {
        var regEx = /^[a-zA-Z][a-zA-Z\s]*$/;
        if (text != "" && regEx.test(text)) {
            name[chatId] = text;

            console.log(name[chatId])
            phone_num = 0
            if (phone_num == 0) {
                getPhoneNumber(chatId, "phone")
            }
            else {
                phone[chatId] = phone_num;
                sendCaseQuestion(chatId, "case description")
            }
        }
        else {
            vaidationFailed(chatId, replyMessageID, "name");
        }

    }

    else if (question == "KBDphone") {
        console.log("kbd")
        text = text.replace(/ /g, "");
        text = text.replace(/\+/g, "");
        text = text.replace(/\-/g, "");
        if (!isNaN(text.substring(1)) && text.length >= 9) {
            phone[chatId] = text;
            console.log(phone[chatId])

            getlocation(chatId)

        }
        else {
            // vaidationFailed(chatId, replyMessageID, "phone");
        }
    }

    else if (question.toLowerCase().includes("location")) {
        if (text != "") {
            lat[chatId] = text;
            lon[chatId]=long;
            console.log(lat[chatId])

            caseStatus = "notsent"

            if (name[chatId] != null && phone[chatId] != null && lat[chatId] != null) {
                sendOrdinaryMessage(chatId,"Request sent")
                sendContactMessage(chatId,`name ${name[chatId] } \n contact phone ${phone[chatId]}`)
                respo= await sendLocationMessage(chatId,lat[chatId],lon[chatId])
                console.log(respo)
            }
            else{
                sendOrdinaryMessage(chatId,"Request not sent")
            }

        }
        else {
            vaidationFailed(chatId, replyMessageID, "location");
        }
    }

}


module.exports = { sendCaseQuestion, assignAnswer }
