const express = require('express')
const router = express.Router()

const games = require('../controllers/games.controller')

router.post('/add-game', games.add)
router.get('/games', games.getAll)
router.patch('/games/:id', games.update)
router.delete('/games/:id', games.delete)

module.exports = router
