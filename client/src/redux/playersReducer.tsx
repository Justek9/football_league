import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

const playersSlice = createSlice({
	name: 'players',
	initialState: initialState.players,
	reducers: {
		default: state => {
			state
		},
	},
})

export default playersSlice.reducer
