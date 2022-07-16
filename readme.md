# kaboom!
## Dependencies
1) A TF2 SRCDS server with [Sourcemod](https://www.sourcemod.net/) and [Metamod:Source](https://www.metamodsource.net/) installed
2) Sourcemod plugins [TF2 Stats](https://forums.alliedmods.net/showthread.php?p=987696) and [MGEMod](https://github.com/sapphonie/MGEMod)
---
## Usage
Create a file in the project root called .env and populate like: 
```js
VAR1='value'
VAR2='value'
VAR3='value'
```
Once finished, install dependencies and run with: 
```bash
yarn && yarn start
#or
npm install && npm run start  
```
---
## Required environment variables:
### IP
> Current public IP address of the SRCDS server, without a port 
### URL
> URL of the website, set to 'https://localhost:(PORT)' if in development 
### RCON_PASSWORD
> RCON password of the SRCDS server, to issue commands 
### DISCORD_TOKEN
> The discord client user's token
### GUILD_ID
> ID of the discord server the bot is being used in
### CLIENT_ID 
> ID of the bot client 
### PORT
> Port to be used by the webserver 
### ENV
> Set to 'DEV' in development
### DB_PATH
> Path to the sourcemod-local.sq3 file, or to the test database
### STEAM_API_KEY
> Your steam developer token 
### LOGGING
> Set to 'false' to disable logging