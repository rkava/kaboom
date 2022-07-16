const assert  = require( 'assert' ) 
const steamid = require( '../utils/steamid' )

//IDs belong to http://steamcommunity.com/profiles/76561197960287930
const id32 = 'STEAM_0:0:11101'
const id64 = '76561197960287930'

describe( 'utils/steamid.js', () => {

	describe( 'converting between steam id versions', () => {

		it( 'should correctly convert from 32 to 64', () => {

			assert( steamid.convert32to64( id32 ) === id64 )
		})

		it( 'should correctly convert from 64 to 32', () => {

			assert( steamid.convert64to32( id64 ) === id32 )
		}) 

	})

}) 