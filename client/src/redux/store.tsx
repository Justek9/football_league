import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from './gamesReducer'

import playersReducer from './playersReducer'

const store = configureStore({
	reducer: {
		games: gamesReducer,
		players: playersReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
})

export default store
