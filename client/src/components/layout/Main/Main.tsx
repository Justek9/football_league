import styles from './Main.module.scss'

const Main = () => {
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<img src='./ball.jpg'></img>
				<h2>Mecze</h2>
			</div>
			<div className={styles.card}>
				<img src='./team.jpg'></img>

				<h2>Zawodnicy</h2>
			</div>
			<div className={styles.card}>
				<img src='./stats.jpg' alt='statistics'></img>

				<h2>Statystyki</h2>
			</div>
			<div className={styles.card}>
				<img src='./background.jpeg'></img>

				<h2>O nas</h2>
			</div>
		</div>
	)
}

export default Main
