/**
 * utils/queries.js
 * 
 * Performs database queries 
 */
 module.exports = async function db( sql ) {

	const sqlite3 = require( 'sqlite3' ).verbose()
	const { open } = require( 'sqlite' )

	const db = await open(
		{
			filename: process.env.DB_PATH, 
			driver: sqlite3.Database 
		}
	)

	let results = await db.all( sql )

	await db.close() 

	return Promise.resolve( results ) 
}