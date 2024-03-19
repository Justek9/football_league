const express = require('express')
const router = express.Router()

const games = require('../controllers/games.controller')

router.post('/add-game', games.add)

module.exports = router
