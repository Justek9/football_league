import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Player {
	id: number
	name: string
}

interface PlayerState {
	players: Player[]
}

const initialState: PlayerState = {
	players: [],
}

export const PlayersSlice = createSlice({
	name: 'Player',
	initialState,
	reducers: {
		addPlayer: (state, action: PayloadAction<{ name: string }>) => {
			state.players.push({ id: state.players.length, name: action.payload.name })
		},
	},
})

export default PlayersSlice.reducer
export const { addPlayer } = PlayersSlice.actions
