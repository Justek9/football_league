const Games = require('../models/Games.model')

exports.add = async (req, res) => {
	try {
		let { number, actions, minutes, aditionalInfo, result, date, players } = req.body
		const newGame = new Games({
			number,
			actions,
			minutes,
			aditionalInfo,
			result,
			date,
			players,
		})
		await newGame.save()
		res.json({ message: 'Game created' })
	} catch (err) {
		res.status(500).json(err + '')
	}
}

exports.getAll = async (req, res) => {
	try {
		const games = await Games.find()
		res.json(games)
	} catch (err) {
		res.status(500).json(err + '')
	}
}

exports.update = async (req, res) => {
	try {
		let toUpdate = req.body
		await Games.updateOne({ _id: req.params.id }, { $set: toUpdate })
		res.json('updated')
	} catch (err) {
		res.status(500).json(err + '')
	}
}
