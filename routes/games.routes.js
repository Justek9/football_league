const express = require('express')
const router = express.Router()

const games = require('../controllers/games.controller')

router.post('/add-game', games.add)
router.get('/games', games.getAll)

module.exports = router
