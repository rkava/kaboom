const assert = require( 'assert' ) 
const regex  = require( '../utils/regex' ) 

const steamid32 = 'STEAM_0:0:11101'

describe( 'utils/regex.js', () => {

	describe( 'regular expressions', () => {

		it( 'should resovle steamid32 correctly', () => {

			let right = regex.STEAMID32.test( steamid32 ) 
			let wrong = regex.STEAMID32.test( steamid32 + ':invalid' )

			assert( right && !wrong )
		})

	})

})