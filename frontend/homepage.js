export default function homepage() {

	//load the homepage here right here right fucking 
	//in this place right here right FUCKING HERE!
	const data = await ( await fetch( '/homepage' ) ).json() 

	console.log( data )

}