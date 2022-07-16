const assert = require( 'assert' ) 
const auth   = require( '../utils/authorize' )

//Can only test authorizing the execution of existing commands 
const interactions = [
	{ commandName: 'rcon', member: { roles: { cache: [ { name: 'kb-2' } ] } } },
	{ commandName: 'rcon', member: { roles: { cache: [ { name: 'kb-1' } ] } } },
	{ commandName: 'rcon', member: { roles: { cache: [ ] } } },
]

describe( 'utils/authorize.js', () => {

	describe( 'rcon authorization', () => {

		it( 'should return false if user has auth lower than kb-2', () => {

			assert( !auth( interactions[ 0 ] ) )
		})

		it( 'should return true if user has auth level kb-1', () => {

			assert( auth( interactions[ 1 ] ) )
		})
	
		it( 'should return false if user has no roles', () => {

			assert( !auth( interactions[ 2 ] ) )
		}) 

	}) 

}) 