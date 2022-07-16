import profile  from './profile'
import homepage from './homepage'

/**
 * frontend/_init.js
 * 
 * Initializes the frontend logic
 */
window.onload = async function() {

	global.paramaters = new URLSearchParams( window.location.search )
	global.user = await ( await fetch( '/user' ) ).json() 
	global.id = paramaters.get( 'id' ) 

	if( id ) {
		//we're loading a user profile
		profile() 

	} else {
		//we're loading the homepage
		homepage()
	}
}