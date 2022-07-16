/**
 * backend/connect.js
 * 
 * Acts as a bridge between discord's allowed http/https
 * protocols and the steam protocol
 */
module.exports = function( req, res ) { 

    let password = req.query.password || ''

    console.log( `steam://connect/${process.env.IP}:27015/${password}`)

    return  res.redirect( 
        `steam://connect/${process.env.IP}:27015/${password}`
    )	
}