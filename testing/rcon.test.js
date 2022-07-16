const assert = require( 'assert' ) 
const rcon   = require( '../utils/rcon' ) 

let interaction = {
	deferReply: async () => Promise.resolve(),
	editReply:  async () => Promise.resolve()
}  

describe( 'utils/rcon.js', () => {

	describe( 'sending rcon commands', () => {

		it( 'should send the "status" command to the server', async () => {

			let response = await rcon( interaction, 'status' )
			return assert( response ) 

		}).timeout( 10000)

	})

}) 