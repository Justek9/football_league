const mongoose = require('mongoose')

const gamesSchema = new mongoose.Schema({
	number: { type: Number },
	actions: { type: Array },
	minutes: { type: String },
	aditionalInfo: { type: String },
	result: { type: String },
	date: { type: Date },
	players: { type: Array },
})

module.exports = mongoose.model('Games', gamesSchema)
