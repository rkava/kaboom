const express  = require( 'express' ) 
const path     = require( 'path' ) 
const passport = require( './passport' )
const app      = express() 

/**
 * backend/_util.js
 * 
 * Setup of the express webserver and its middleware, 
 * as well as binding of endpoint handlers 
 */
module.exports = function() {

    passport( app ) 
        
	app.use( express.static( 'public' ) )

	app.get( '/', ( req, res ) => {
		res.sendFile( path.resolve( __dirname, '../public/index.html' ) ) 
	})

	//Programatically assign GET endpoints
	!([ 'homepage','connect', 'profile', 'user'
	]).forEach(e => app.get( '/' + e, require( './' + e ) ) )

	app.listen( process.env.PORT, () => {
		console.log( 'Webserver ready' )
	})

}