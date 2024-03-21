import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

const gamesSlice = createSlice({
	name: 'games',
	initialState: initialState.games,
	reducers: {
		default: state => {
			state
		},
	},
})

export default gamesSlice.reducer
