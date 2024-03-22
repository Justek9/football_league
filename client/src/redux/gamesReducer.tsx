import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Game {
	id: number
	name: string
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
		addGame: (state, action: PayloadAction<{ name: string }>) => {
			state.games.push({ id: state.games.length, name: action.payload.name })
		},
	},
})

export default GamesSlice.reducer
export const {addGame} = GamesSlice.actions
