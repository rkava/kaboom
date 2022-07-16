const path = require( 'path' ) 
const fs   = require( 'fs/promises' ) 

/**
 * discord/password.js
 * 
 * Replies with the the current server password
 */
 module.exports = async function( interaction ) {

	await interaction.deferReply( { ephemeral: true } ) 

	let password = undefined 

	try { 
		
		password = await fs.readFile( './configs/password.txt', { encoding: 'utf8'} )

	} catch( e ) { password = undefined } 

	await interaction.editReply({
		embeds: [{
			title: 'Password',
			description: password ? 
				'Password: ' + password :
				'The server does not have a password',
			color: 'GREEN'
		}]
	})

}