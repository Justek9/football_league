import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SingleGame {
	number: number
	actions: string[]
	minutes: string
	aditionalInfo: string
	result: string
	date: string
	players: [{ green: string[]; red: string[] }]
}

interface GameState {
	games: SingleGame[]
}

const initialState: GameState = {
	games: [],
}

export const GamesSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		addGames: (state, action: PayloadAction<{ games: SingleGame[] }>) => {
			state.games = [...action.payload.games]
		},
	},
})

export default GamesSlice.reducer
export const { addGames } = GamesSlice.actions
