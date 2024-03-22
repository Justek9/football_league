import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import gamesReducer from './gamesReducer'
import playersReducer from './playersReducer'

export const store = configureStore({
	reducer: {
		games: gamesReducer,
		players: playersReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch

export const useAppSelctor: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
