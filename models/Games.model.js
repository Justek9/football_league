const mongoose = require('mongoose')

const gamesSchema = new mongoose.Schema({
	actions: { type: Array },
})

module.exports = mongoose.model('Games', gamesSchema)
