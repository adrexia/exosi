
module.exports = message => {

	function handleError(error, member, message) {
		console.log(error);
		return message.reply(`Sorry, an error occurred`, error);
	}


	function init() {
		message.channel.messages.fetchPinned().then((pins) => {
			pins.each((msg) => msg.unpin().catch(console.error));
		}).catch(console.error);
	}

	return init();
}