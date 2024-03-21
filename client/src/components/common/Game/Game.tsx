import { useNavigate } from 'react-router-dom'
import ActionsTable from '../../features/ActionsTable/ActionsTable'
import { LatestGame } from '../../pages/Home/Home'
import styles from './Game.module.scss'

type gameProps = {
	latestGame: LatestGame[]
}

const Game = ({ latestGame }: gameProps) => {
	const date = latestGame[0].date.slice(0, 10)

	const navigate = useNavigate()
	const moreGamesClickHandler = () => {
		navigate('/mecze')
	}

	return (
		<section className={styles.root}>
			<h1>Mecz nr {latestGame[0].number}</h1>
			<p>{latestGame[0].aditionalInfo}</p>
			<p>
				<b>Data: {`${date}, godzina 8:00`} </b>
			</p>
			<h2>
				<span className={styles.teamColor}>zieloni </span>
				{latestGame[0].result} <span className={styles.teamColor}>czerwoni </span>
			</h2>
			<ActionsTable />
			<button className={styles.btn} onClick={moreGamesClickHandler}>
				Zobacz więcej meczów...
			</button>
		</section>
	)
}

export default Game
