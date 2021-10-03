const kick = require("../commands/kick")
const listpins = require("../commands/listpins")
const unpin = require("../commands/unpin")

module.exports = (client, message) => {

	if (message.content.startsWith("/kick-role")) {
		return kick(message)
	}

	if (message.content.startsWith("/listpins")) {
		return listpins(message)
	}

	if (message.content.startsWith("/unpin")) {
		return unpin(message)
	}
}