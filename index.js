const url = 'WEBHOOK URL';
const Webhook = require('./webhook.js');
const discord = require('discord.js');
const webhook = new Webhook(url)
  .setUsername('Hello World!')
  .setIcon('https://github.com/Tur-ph/discord_webhook/blob/a61502dd1795d689c298ab363eea71e955f5d1f1/assets/profile_picture.jpg');

const embed = new discord.MessageEmbed()
  .setTitle('Tutorial Message')
  .setDescription('Tutorial Message');

webhook.send('Tutorial Message', embed);
