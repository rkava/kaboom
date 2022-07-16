/**
 * utils/error.js
 * 
 * Responds to discord interactions detailing the 
 * specifics of an error to remove error-handling 
 * clutter from other modules  
 */
module.exports = async function( error, interaction) {

	await interaction.editReply({
		embeds: [{
			title: 'Error',
			description: error.message,
			color: 'RED'
		}]
	})
	
	return Promise.resolve() 
}