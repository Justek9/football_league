const Games = require('../models/Games.model')

exports.add = async (req, res) => {
	console.log('jestem', req.body)

	try {
		const newGame = new Games({
			actions: [],
		})
		await newGame.save()
		res.json({ message: 'Game created' })
	} catch (err) {
		res.status(500).json(err + '')
	}
}
