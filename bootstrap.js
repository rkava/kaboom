/**
 * bootstrap.js
 * 
 * Initialize the program
 */
!(function() {

	//Alert if logging is disabled
	if( process.env.LOGGING === 'false' ) 
		console.log( 'Logging disabled' )

	//Import environment variables from .env file
	require( 'dotenv' ).config() 

	//Initialize the webserver 
	if( process.env.WEBSERVER ) require( './backend/_init' )()

	//Initialize the discord bot 
	require( './discord/_init' )()

})()