import { useNavigate } from 'react-router-dom'
import ActionsTable from '../../features/ActionsTable/ActionsTable'
import { LatestGame } from '../../pages/Home/Home'
import AOS from 'aos'
import 'aos/dist/aos.css'
import styles from './Game.module.scss'
import { useEffect } from 'react'

type gameProps = {
	latestGame: LatestGame | LatestGame[]
	games: LatestGame[]
}

const Game = ({ latestGame, games }: gameProps) => {
	latestGame = Array.isArray(latestGame) ? latestGame[0] : latestGame
	const date = latestGame.date.slice(0, 10)

	const navigate = useNavigate()
	const moreGamesClickHandler = () => {
		navigate('/mecze')
	}

	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<section className={styles.root} data-aos='fade-left'>
			<h1>Mecz nr {latestGame.number}</h1>
			<p>{latestGame.aditionalInfo}</p>
			<p>
				<b>Data: {`${date}, godzina 8:00`} </b>
			</p>
			<h2>
				<span className={styles.teamColor}>zieloni </span>
				{latestGame.result} <span className={styles.teamColor}>czerwoni </span>
			</h2>
			<ActionsTable actions={latestGame.actions} />
			<button className={styles.btn} onClick={moreGamesClickHandler}>
				Zobacz więcej meczów...
			</button>
		</section>
	)
}

export default Game
