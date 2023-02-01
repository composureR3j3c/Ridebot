require(`dotenv`).config();
const express = require(`express`);
const bodyParser = require(`body-parser`);
const axios = require(`axios`);

const https=require('https');
const fs=require('fs');

const { postFromTelegram } = require('./src/routes/route');

 
const { TOKEN, SERVER_URL } = process.env;
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;
const URI = `/webhook/${TOKEN}`;
const WEBHOOK_URL = SERVER_URL + URI;

const app = express(); 
app.use(bodyParser.json());

const init = async () => {
  try {
    
    const res = await axios.get(
      `${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}`
    );
    console.log(WEBHOOK_URL) 
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
};

    

app.post(URI, async (req, res) => {
    console.log(req.body);
    if (req.body.message?.photo!=null)
    console.log(req.body?.message?.photo[2])
    else if(req.body.message?.video!=null)
    console.log(req.body?.message?.video?.file_id)
    postFromTelegram(req,res)
  })
    
app.get("/", (req, res) => {  
    res.send("Server UP!")  
})

 
app.listen(process.env.PORT || 5000, async () => {
 console.log("listening on port", 5000 || process.env.PORT);
  await init();
});  
