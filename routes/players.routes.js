const express = require('express')
const router = express.Router()

const players = require('../controllers/players.controller')

router.get('/players', players.getAll)
router.post('/add-player', players.add)

module.exports = router
