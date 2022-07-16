const builder  = require( '@discordjs/builders' ).SlashCommandBuilder
const rest     = require( '@discordjs/rest' ).REST 
const routes   = require( 'discord-api-types/v9' ).Routes 

/**
 * utils/register.js
 * 
 * Registers the slash commands found in configs/commands.json
 * with the discord API
 */
!(function() {

	//Load the environment variables in the .env file
	require( 'dotenv' ).config()

	let commands = require( '../configs/commands.json' ).map( command => {

		let slashcommand = 
			new builder()
				.setName( command.name ) 
				.setDescription( command.description ) 

		for( let i in command.options ) {

			//Dynamically call a function based on the type of option being set
			slashcommand[ `add${ command.options[ i ].type }Option` ]
			( option => {

				for( let n in command.options[ i ] ) {

					if( n === 'type' ) continue 

					let func = 'set' + n.charAt( 0 ).toUpperCase() + n.slice( 1 )
					let prop = command.options[ i ][ n ] 

					if( n === 'choices' ) { option[ func ]( ...prop ) } 
					else { option[ func ]( prop ) }
				}

				return option 
			})
		}
	
		return slashcommand.toJSON() 
	})

	//Regsister the commands with the discord API 
	new rest( { version: '9' } )
		.setToken( 
			process.env.DISCORD_TOKEN 
		)
		.put(
			routes.applicationGuildCommands(
				process.env.CLIENT_ID,
				process.env.GUILD_ID
			),
			{ body: commands }  
		)
		.then( () => console.log( 'Registered application commands' ) ) 
		.catch( console.error ) 

})()