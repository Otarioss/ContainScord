const u = require('./../data/utils.js')

// Theses three exports add required
exports.name = "guildMemberAdd" 
exports.args = "member"

// Send a message to new member
exports.run = (client, member) => {
	member.send(u.display_mes(u.mes.events.welcome_message, member.guild.name))
}