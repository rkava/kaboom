const path   = require( 'path' ) 
const fs     = require( 'fs/promises' ) 
const exists = require( '../utils/exists')

/**
 * utils/logger.js 
 * 
 * Manages writing data to logfiles
 */
module.exports = {

	//Logs issued commands to the file logs/command.log
	command: async function( interaction ) {

		await module.exports.log( 
			'../logs/command.log', 
			`${Math.floor(+new Date() / 1000)}| ${ interaction.user.tag }: ${ interaction.commandName }\n`
		)

		return Promise.resolve() 
	},

	//Logs an error object to the file logs/error.log
	error: async function( error ) {

		await module.exports.log( 
			'../logs/error.log', 
			`${Math.floor(+new Date() / 1000)}| ${ error.name }: ${ error.message }\n` 	
		)

		return Promise.resolve() 
	},

	//Boilerplate logging code
	log: async function( logpath, log ) {

		if( process.env.LOGGING === 'false' ) return Promise.resolve() 

		try {
			let exists = await exists( logpath )

			if( !exists ) { await fs.writeFile( logpath, log) } 
			else {
				await fs.appendFile( logpath, log )
			}

			return Promise.resolve()

		} catch( e ) {}

	}

}