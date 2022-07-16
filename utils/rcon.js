const error = require( './error' ) 

/**
 * utils/rcon.js
 * 
 * Manages the execution of SRCDS RCON commands
 * and handling of associated errors 
 */
module.exports = async function( interaction, command ) {

	let connection = require( 'srcds-rcon' )
	({
		password: process.env.RCON_PASSWORD,
		address: process.env.IP + ':27015' 
	})

	try { 
		await connection.connect()

		connection.command( command, 10000 )

		return Promise.resolve( true ) 

	} catch( e ) { 
		
		return Promise.resolve( false ) 
	
	}
}