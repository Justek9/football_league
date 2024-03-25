import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Game {
	number: number
	actions: string[]
	minutes: string
	aditionalInfo: string
	result: string
	date: string
	players: string[]
}

interface GameState {
	games: Game[]
}

const initialState: GameState = {
	games: [],
}

export const GamesSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		addGames: (state, action: PayloadAction<{ games: Game[] }>) => {
			state.games = [...action.payload.games]
		},
	},
})

export default GamesSlice.reducer
export const { addGames } = GamesSlice.actions
