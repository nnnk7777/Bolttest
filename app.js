require('dotenv').config()

const env = process.env
const { App } = require('@slack/bolt');

const app = new App({
  token: env.SLACK_BOT_TOKEN,
  signingSecret: env.SLACK_SIGNING_SECRET
});

app.command('/bolt', async ({ command, ack, say, context }) => {
  ack();
  try {
    say('ウサイン！🏃');
  } catch (error) {
    console.log(error);
  }
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})();
