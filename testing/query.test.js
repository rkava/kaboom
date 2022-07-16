const assert  = require( 'assert' ) 
const query = require( '../utils/query' ) 

describe( 'utils/queries.js', () => {

	describe( 'executing database queries', () => {

		it( 'should return all rows from mgemod_duels', async () => {

			let rows = await query( 'SELECT * FROM mgemod_duels' ) 	
			return assert( rows.length )
		})
	
	})

})