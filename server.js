const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const connectToDB = require('./db')
const playersRoutes = require('./routes/players.routes')
const gamesRoutes = require('./routes/games.routes')
const path = require('path');


const app = express()
const server = app.listen(process.env.PORT || 8000, () => {
	console.log('Server is running...')
})

connectToDB()

if (process.env.NODE_ENV !== 'production') {
	app.use(
		cors({
			origin: ['http://localhost:3000', 'http://localhost:8000'],
			credentials: true,
		})
	)
}
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api/', playersRoutes)
app.use('/api/', gamesRoutes)

// Serve static files
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.static(path.join(__dirname, '/client/build')))

app.use((req, res) => {
	res.status(404).send({ message: 'Not found...' })
})
