const rcon  = require( '../utils/rcon' ) 
const error = require( '../utils/error' ) 

/**
 * discord/map.js
 * 
 * Enables lower-auth users to change the server's current
 * map to one of a specified selection
 */
module.exports = async function( interaction ) {
	
	await interaction.deferReply( { ephemeral: true } ) 

	let map = interaction.options.getString( 'map' )

	try {

		let success = await rcon( interaction, `changelevel ` + map )

		if( success ) {

			await interaction.editReply({
				embeds: [{
					title: 'Response',
					description: `Server map changed to ${map}`,
					color: 'BLUE'
				}],
			})

		}

	} catch( e ) { 
		await error( e, interaction ) 
	} 

}