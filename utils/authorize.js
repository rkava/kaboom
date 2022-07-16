const commands = require( '../configs/commands.json' )

/**
 * utils/authorize.js
 * 
 * Determines whether the command issuer is authorized 
 * to execute the command or not, returns an object 
 * with relevent information 
 */
module.exports = function authorize( interaction ) {

	let command = commands.find( 
		command =>  command.name === interaction.commandName 
	) 

	let role = interaction.member.roles.cache
		.find( r => {
			if( r.name.startsWith( 'kb' ) ) {
				if( parseInt( r.name.split( '-' )[ 1 ] ) <= command.auth ) 
					return r 
			}
		})

	return role ? true : false 
	
}