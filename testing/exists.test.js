const assert = require( 'assert' )
const exists = require( '../utils/exists' )

describe( 'utils/exists.js', () => {

	describe( 'checking if files exist', () => {

		it( 'should find this test file', () => {

			assert( exists( 'exists.test.js' ) )
		})

		it( 'should find the package.json', () => {

			assert( exists( '../package.json' ) )
		})

		it( 'should find the bot init file', () => {

			assert( exists( '../discord/_init.js' ) ) 
		})
	}) 

}) 