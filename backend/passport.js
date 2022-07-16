const session  = require( 'express-session' ) 
const passport = require( 'passport' ) 
const strategy = require( 'passport-steam' ).Strategy 

/**
 * backend/passport.js 
 * 
 * Everything related to steam openauth sign-in 
 * and authentication 
 */
module.exports = function( app ) {

    app.use(session({
		secret: process.env.SESSION_SECRET,
		saveUninitialized: true,
		resave: false,
		cookie: {
			maxAge: 3600000
		}
	}))

	passport.serializeUser(   ( user, done ) => done( null, user ) )
	passport.deserializeUser( ( user, done ) => done( null, user ) )

	passport.use( new strategy(
		{
			returnURL: process.env.URL + '/auth/steam/return',
			realm: 	   process.env.URL, 
			apiKey:    process.env.STEAM_API_KEY,
		},
		( identifier, profile, done ) => {
			process.nextTick( () => {
				profile.identifier = identifier
				return done( null, profile ) 
			})
		}
	))

    app.use( passport.initialize() )

	app.use( passport.session() )

    app.get( '/auth/steam', 
		passport.authenticate( 'steam', { failureRedirect: '/' } ), 
        ( req, res ) => res.redirect( '/' ) 
    )

    app.get( '/auth/steam/return', 
		passport.authenticate( 'steam', { failureRedirect: '/' } ), 
        ( req, res ) => res.redirect( '/' ) 
    )

    app.get( '/auth/logout', ( req, res ) => {
        req.logout( e => {
            if( e ) console.log( e )
        })
        res.redirect( '/' )
    })

}