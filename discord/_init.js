const client    = require( 'discord.js' ).Client
const intents   = require( 'discord.js' ).Intents  
const authorize = require( '../utils/authorize' ) 
const logger    = require( '../utils/logger' ) 

const bot = new client( { intents: [ intents.FLAGS.GUILDS ] } )
/**
 * discord/_init.js 
 * 
 * Initialize the discord bot and regsiter commands 
 * automatically using configs/commands.json
 */
module.exports = function() {

	bot.once( 'ready', () => console.log( 'Bot ready' ) )
 
	bot.login( process.env.DISCORD_TOKEN ) 

	bot.on( 'interactionCreate', async interaction => {

		//Ignore non-command messages 
		if( !interaction.isCommand() ) return 

		//Log the issued command
		await logger.command( interaction ) 

		if( authorize( interaction ) ) {
			//Automatically execute the module in this directory
			//matching names with the command 
			require( `../discord/${ interaction.commandName }` )( interaction ) 
		
		} else {

			await interaction.reply({
				embeds: [{ 
					title: 'Response',
					description: 'You are not authorized to use that command',
					color: 'RED'
				}],
				ephemeral: true 
			})

		}

	})

}
