const { App } = require('@slack/bolt');
require('dotenv').config();
const axios = require('axios');

// Initializes your app in socket mode with your app token and signing secret
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true, // add this
    appToken: process.env.SLACK_APP_TOKEN // add this
});

// const {getdata,getdata2} = require('./getdata');

app.message("type", async({message,say} : {message : object,say : Function}) => {
  await say(`${typeof(message)}`);
  await say(`${typeof(say)}`);
})
/*
// Listens to incoming messages that contain "hello"
app.message('i am bored', async ({ message,say}) => {
    const response = await axios.request(getdata2);
    await say(`${response.data.body[0].setup}`);
    await say(`${response.data.body[0].punchline}`);
    await say({
        blocks: [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": `Hey there <@${message.user}>!, you are bored eh ? well click the button for a suprise .. `
            },
            "accessory": {
              "type": "button",
              "text": {
                "type": "plain_text",
                "text": "Click Me"
              },
              "action_id": "button_click"
            }
          }
        ]
      });
});

app.message('get a meme', async({message,say}) => {
    const response = await axios.request(getdata);
    const img_url = response.data[0].image;
    await say({
        blocks: [
            {
                type: 'section',
                text: {
                  type: 'plain_text',
                  text: 'here is your meme, you lazy programmer 👨‍💻'
                }
              },
              {
                type: 'image',
                image_url: `${img_url}`,
                alt_text: 'jaake coding karo beta/beti !!'
              }
        ]

    })
})

app.action('button_click', async ({ body, ack, say }) => {
// Acknowledge the action
await ack();
await say({
    blocks: [
        {
            type: 'section',
            text: {
              type: 'plain_text',
              text: 'you just got RICK ROLLED 😈'
            }
          },
          {
            type: 'image',
            image_url: `https://media.tenor.com/kGekz062mwgAAAAd/hugs-rickroll.gif`,
            alt_text: 'jaake coding karo beta/beti !!'
          }
    ]
})
});
*/
(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})();