import { useNavigate } from 'react-router-dom'
import ActionsTable from '../../features/ActionsTable/ActionsTable'
import { SingleGame } from '../../../redux/gamesReducer'
import { useEffect, useState } from 'react'
import { Player } from '../../../redux/playersReducer'

import AOS from 'aos'
import 'aos/dist/aos.css'

import styles from './Game.module.scss'
import PlayerOverview from '../../views/PlayerOverview/PlayerOverview'
import { useAppSelctor } from '../../../redux/store'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

type gameProps = {
	latestGame: SingleGame
	games?: SingleGame[]
	showMore: boolean
}

const Game = ({ latestGame, games, showMore }: gameProps) => {
	const players = useAppSelctor(state => state.players.players)
	const date = latestGame?.date.slice(0, 10)
	const [greenPlayers, setGreenPlayers] = useState<Player[] | []>([])
	const [redPlayers, setRedPlayers] = useState<Player[] | []>([])

	useEffect(() => {
		if (latestGame && players) {
			const greenPlayersArray = latestGame?.players[0].green
			const greenToShow = players.filter(player => greenPlayersArray?.includes(player.short))
			setGreenPlayers(greenToShow)

			const redPlayersArray = latestGame?.players[0].red
			const redToShow = players.filter(player => redPlayersArray?.includes(player.short))
			setRedPlayers(redToShow)
		}

		AOS.init()
	}, [latestGame, players])

	const navigate = useNavigate()
	const moreGamesClickHandler = () => {
		navigate('/mecze')
	}

	if (!players || !latestGame) return <LoadingSpinner />

	return (
		<section className={styles.root} data-aos='fade-left'>
			<h1>Mecz nr {latestGame?.number}</h1>
			<p>{latestGame?.aditionalInfo}</p>
			<p>
				<b>Data: {`${date}, godzina 8:00`} </b>
			</p>
			<h2>
				<span className={styles.teamColor}>zieloni </span>
				{latestGame?.result} <span className={styles.teamColor}>czerwoni </span>
			</h2>
			<ActionsTable actions={latestGame?.actions} />
			<div className={styles.teams}>
				<p>Zieloni: </p>
				<div className={styles.greenTeam}>
					{greenPlayers.map(player => {
						return <PlayerOverview game={true} key={player.name} player={player} />
					})}
				</div>
			</div>
			<div className={styles.teams}>
				<p>Czerwoni:</p>
				<div className={styles.redTeam}>
					{redPlayers.map(player => {
						return <PlayerOverview game={true} key={player.name} player={player} />
					})}
				</div>
			</div>

			{showMore && (
				<button className={styles.btn} onClick={moreGamesClickHandler}>
					Zobacz więcej meczów...
				</button>
			)}
		</section>
	)
}

export default Game
