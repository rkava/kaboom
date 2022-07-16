const fs     = require( 'fs/promises' ) 
const crypto = require( 'crypto' ) 
const rcon   = require( '../utils/rcon' ) 
const error  = require( '../utils/error' ) 

/**
 * discord/lock.js
 * 
 * Toggles the SRCDS server password between nothing and a 
 * random string of 16 characters 
 */
module.exports = async function( interaction ) {

	await interaction.deferReply( { ephemeral: true } ) 

	let password = undefined 

	try {

		password = await fs.readFile( './configs/password.txt', { encoding: 'utf8'} )

	} catch( e ) { password = undefined } 
 
	password = password ? '' : crypto.randomBytes( 16 ).toString( 'hex' )

	try {
		await fs.writeFile( './configs/password.txt', password )

		let success = await rcon( interaction, 'sv_password ' + password )

		if( success ) {

			await interaction.editReply({
				embeds: [{
					title: 'Response',
					description: password ? 
						`Server password changed to ${ password }` :
						`Server password removed`,
					color: 'BLUE'
				}],
			})

		}

	} catch( e ) {

		await error( e, interaction )
	}

}