/**
 * backend/userdata.js
 * 
 * Returns the data of the requesting user if they're
 * logged in with steam
 */
module.exports = function( req, res ) {

	if( !req.user ) return res.send( { success: false } )

	return res.send( { success: true, data: req.user })
}