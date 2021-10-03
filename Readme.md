# Exosi 
A simple discord bot for maintenance tasks
* kicks users by role `/kick-role @role-to-kick`
* writes all pins in a channel to a text file (best to run the bot locally for this) `/listpins`
* unpin all messages in a channel `/unpin`

## Env file
Create a .env file - you can use .example.env for the required variables. 

`BOT_TOKEN` – see the Discord bot creation guide.  
`BOT_MESSAGE` - this is the message set to users who have been kicked. 

## Run the bot 
This bot is normally run locally, as its only used about once a season. After registering the bot with discord, you can run `npm run-script dev` from the project root. See the article below for a fuller overview

### How to set up a Discord bot
https://thomaslombart.com/create-a-discord-bot-under-15-minutes
