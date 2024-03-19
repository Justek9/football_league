const Players = require('../models/Players.model')

exports.getAll = async (req, res) => {
	try {
		const players = await Players.find()
		res.json(players)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

exports.add = async (req, res) => {

	try {
		let { name, nickname, birthYear, city, active, imgSrc } = req.body
		if (name && nickname && birthYear && city && active && imgSrc) {
			const newPlayer = new Players({ name, nickname, birthYear, city, active, imgSrc })
			await newPlayer.save()
			res.json(newPlayer)
		}
	} catch (err) {
		res.status(500).json(err + '')
	}
}
