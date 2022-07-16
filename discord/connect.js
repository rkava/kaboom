const fs = require( 'fs/promises' ) 

/**
 * discord/connect.js
 *  
 * Replies to the interaction with a link connecting 
 * to the SRCDS server
 */
module.exports = async function( interaction ) {

	await interaction.deferReply( { ephemeral: true } ) 

	let password = undefined

	try {

		password = await fs.readFile( './configs/password.txt', { encoding: 'utf8' } )

	} catch( e ) { /* No configs/password.txt */ }

	await interaction.editReply({
		embeds: [{
			title: 'Click here to join',
			url: `${ process.env.URL }/connect${ password ? '?password=' + password : '' }`,
			description: password ? 'Password: ' + password : 'No password',
			color: 'GREEN'
		}]
	})

}