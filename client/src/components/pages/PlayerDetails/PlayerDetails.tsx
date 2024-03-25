import { useEffect } from 'react'
import TopBar from '../../layout/TopBar/TopBar'

import AOS from 'aos'
import 'aos/dist/aos.css'

import styles from './PlayerDetails.module.scss'

const PlayerDetails = () => {
	
	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<div className={styles.root}>
			<TopBar src='../logo.jpg' />
			<div className={styles.container} data-aos='fade-left'>
				<div>
					<img src='https://www.latoliga.pl/zawodnicy/rutkowski_pawel/01.jpg' alt='Paweł' />
				</div>
				<div>
					<h2>Paweł Rutkowski</h2>
					<p>
						Pseudonim: <span className={styles.bold}>Florian</span>
					</p>
					<p>
						Identyfikator: <span className={styles.bold}>RU</span>
					</p>
					<p>
						Rok urodzenia: <span className={styles.bold}>1987</span>
					</p>
					<p>
						Miasto: <span className={styles.bold}>Warszawa</span>
					</p>
					<p>
						Numer koszulki: <span className={styles.bold}>48</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default PlayerDetails
