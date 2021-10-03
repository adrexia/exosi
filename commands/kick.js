module.exports = message => {
	function handleError(error, member, message) {
		console.log(error);
		return message.reply(`Sorry, an error occurred`, error);
	}

	function doKick(member, message) {
		if (member && !member.kickable) {
			return message.reply(`I can't kick ${member.user.tag}. Sorry!`)
		}
		
		const leaveMessage = process.env.BOT_MESSAGE;

		return member
			.send(leaveMessage)
			.then(() => member.kick().catch(error => handleError(error, member, message))
			.then(() => message.reply(`${member.user.tag} was kicked.`)))
			.catch(error => handleError(error, member, message))
	}

	function init() {
		const member = message.mentions.members.first()
		const role = message.mentions.roles.first()

		if (!member && !role) {
			return message.reply(`Who are you trying to kick? You must mention a user or a role.`)
		}

		if (!role) {
			return doKick(member, message);
		}

		let members = role.members;
		message.reply(`${members.size} total to kick`)

		if (members.size > 10) {
			message.reply(`Kicking first 10 users`)
			members = members.first(10);
			console.log(members);
		}

		if (members.size || members.length) {
			members.forEach(member => doKick(member, message))
			message.reply(`Done`)
		} else {
			return message.reply(`Sorry, there are no users with that role`)
		}
	}

	return init();
}