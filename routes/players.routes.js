const express = require('express')
const router = express.Router()

const players = require('../controllers/players.controller')

router.get('/players', players.getAll)
router.post('/add-player', players.add)
router.patch('/player/:id', players.update)

module.exports = router
