import styles from './Main.module.scss'

const Main = () => {
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h2>Mecze</h2>
			</div>
			<div className={styles.card}>
				<h2>Zawodnicy</h2>
			</div>
			<div className={styles.card}>
				<h2>Statystyki</h2>
			</div>
			<div className={styles.card}>
				<h2>O nas</h2>
			</div>
		</div>
	)
}

export default Main
