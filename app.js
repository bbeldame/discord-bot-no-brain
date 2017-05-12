const Discord = require('discord.js');
require('dotenv').config()
const client = new Discord.Client();
const pr0gramm =  require('./pr0gramm.js');

client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'what is my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
  // If the message beggin with pr0

  if(message.content.substring(0,4).toLowerCase() === 'pr0 ') {
    //send a random pr0gramm image with the tag
    var img = pr0gramm.getImage(message.content.substring(4));
    img.then(function(v) {
        console.log(v);
        message.channel.send(v);
    });
  }
});

// Create a new webhook
//const hook = new Discord.WebhookClient(process.env.WEBHOOK_ID, process.env.WEBHOOK_TOKEN);

// Send a message using the webhook
//hook.send('I am now alive!');

client.login(process.env.TOKEN);
