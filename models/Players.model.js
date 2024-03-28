const mongoose = require('mongoose')

const playersSchema = new mongoose.Schema({
	name: { type: String },
	nickname: { type: String },
	birthYear: { type: Number },
	city: { type: String },
	active: { type: Boolean },
	imgSrc: { type: String },
	short: { type: String },
})

module.exports = mongoose.model('Players', playersSchema)
