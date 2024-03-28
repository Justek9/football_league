import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Player = {
	name: string
	nickname: string
	birthYear: number
	city: string
	active: boolean
	imgSrc: string
	short: string
	number: number
	detailsImgSrc: string
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
		addPlayers: (state, action: PayloadAction<{ players: Player[] }>) => {
			state.players = [...action.payload.players]
		},
	},
})

export default PlayersSlice.reducer
export const { addPlayers } = PlayersSlice.actions
