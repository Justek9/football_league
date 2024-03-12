const express = require('express')
const cors = require('cors')
const app = express()
app.listen('8000', () => {
	console.log('Server is running...')
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res) => {
	res.status(404).send({ message: 'Not found...' })
})
