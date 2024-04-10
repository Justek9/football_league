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
		let { name, nickname, birthYear, city, active, imgSrc, short, number, detailsImgSrc } = req.body
		if (name && nickname && birthYear && city && active && imgSrc && short && number && detailsImgSrc) {
			const newPlayer = new Players({  name, nickname, birthYear, city, active, imgSrc, short, number, detailsImgSrc })
			await newPlayer.save()
			res.json(newPlayer)
		}
	} catch (err) {
		res.status(500).json(err + '')
	}
}

exports.update = async (req, res) => {
	try {
		let toUpdate = req.body
		await Players.updateOne({ _id: req.params.id }, { $set: toUpdate })
		res.json('updated')
	} catch (err) {
		res.status(500).json(err + '')
	}
}

exports.delete = async (req, res) => {
	try {
		const id = req.params.id
		const playerToDelete = await Players.findById(id)
		if (playerToDelete) await Players.deleteOne({ _id: id })
		res.json({ message: 'OK, player deleted' })
	} catch (err) {
		res.status(500).json(err + '')
	}
}
