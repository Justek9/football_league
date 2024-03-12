const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const connectToDB = () => {
	const password = process.env.DB_PASSWORD
	console.log('hasło', process.env.DB_PASSWORD)
	const uri = `mongodb+srv://zagorskaj:${password}@cluster0.gh0ncql.mongodb.net/FootballLeague?retryWrites=true&w=majority`

	mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	const db = mongoose.connection

	db.once('open', () => {
		console.log('Connected to the database')

		db.on('error', err => console.log('Error' + err))
	})
}

module.exports = connectToDB
