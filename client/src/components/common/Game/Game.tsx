import { useNavigate } from 'react-router-dom'
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
			<h2>{latestGame[0].result}</h2>
			<p>Przebieg I połowy meczu:</p>
			<p>
				<span>0</span> <span>1 </span> <span>3'</span> <span>Jarosław Kucharski</span> (po podaniu Piotra Rytla)
			</p>
			<p>Przebieg II połowy meczu:</p>
			<button className={styles.btn} onClick={moreGamesClickHandler}>Więcej meczy...</button>
		</section>
	)
}

export default Game
