import styles from './Game.module.scss'

const Game = () => {
	return (
		<div className={styles.root}>
			<p>Mecz nr 61/2022 (1000)</p>
			<p>45+47 min. sztuczne światło, temp. 5°C</p>
			<p>Data: 19.03.2024 godzina 8:00</p>
			<div>
				<span>10</span>:<span>8</span>
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
