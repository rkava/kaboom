const inc = BigInt( '76561197960265729' ) 
const dec = BigInt( '76561197960265728' )

/**
 * utils/steamid.js 
 * 
 * Provides utilities for converting between steamid
 * versions 32 and 64
 */
module.exports = {
	/* The values of int and dec aren't entirely arbitrary,
	   they are base 10 versions of more sensible looking 
	   base 2 values used by valve 
	*/

	convert64to32: function( id64 ) {
		
		id64 = BigInt( id64 ) 
		
		return 'STEAM_0:' + 
			( BigInt( id64 ) % 2n === 0n ? '0' : '1' ) + ':' + 
			( ( id64 - ( dec + ( id64 % 2n ) ) ) / 2n ).toString() 
	},

	convert32to64: function( id32 ) {
		return ( 
			id32.split( ':' )[ 1 ] === '1' ? inc : dec + 
			BigInt( parseInt( id32.split( ':' )[ 2 ] ) * 2 ) 
		)
		.toString() 
	} 

}