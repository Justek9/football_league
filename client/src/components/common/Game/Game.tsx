import { LatestGame } from '../../pages/Home/Home'
import styles from './Game.module.scss'

type gameProps = {
	latestGame: LatestGame[]
}

const Game = ({ latestGame }: gameProps) => {
	const date = latestGame[0].date.slice(0, 10)
	return (
		<div className={styles.root}>
			<p>Mecz nr {latestGame[0].number}</p>
			<p>{latestGame[0].aditionalInfo}</p>
			<p>Data: {`${date} godzina 8:00`} </p>
			<div>
			{latestGame[0].result}
			</div>
			<p>Przebieg I połowy meczu:</p>
			<p>
				<span>0</span> <span>1 </span> <span>3'</span> <span>Jarosław Kucharski</span> (po podaniu Piotra Rytla)
			</p>
			<p>Przebieg II połowy meczu:</p>
		</div>
	)
}

export default Game
