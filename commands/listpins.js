const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const moment = require('moment');

module.exports = message => {


	function handleError(error, member, message) {
		console.log(error);
		return message.reply(`Sorry, an error occurred`, error);
	}

	function listPins(pins) {

		const csvWriter = createCsvWriter({
			path: 'test.csv',
			header: [
				{id: 'date', title: 'DATE'},
				{id: 'url', title: 'URL'},
				{id: 'content', title: 'CONTENT'}
			]
		});

		const records = []

		pins.forEach((pin) => {
			let created = moment(pin.createdTimestamp).format('DD/MM/YY');
			records.push( {
				date: created,
				url: pin.url,
				content: pin.content
			});
		})

		csvWriter.writeRecords(records)       // returns a promise
			.then(() => {
				console.log('...Done');
			});
	}

	function init() {
		message.channel.messages.fetchPinned().then((pins) => listPins(pins))

	}

	return init();
}