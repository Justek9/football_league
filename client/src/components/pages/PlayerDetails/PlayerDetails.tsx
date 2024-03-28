import { useEffect } from 'react'
import TopBar from '../../layout/TopBar/TopBar'

import AOS from 'aos'
import 'aos/dist/aos.css'

import styles from './PlayerDetails.module.scss'
import { useAppSelctor } from '../../../redux/store'
import { useParams } from 'react-router-dom'

const PlayerDetails = () => {
	const { nickname } = useParams()
	const players = useAppSelctor(state => state.players.players)
	let playerToShow = players.find(player => player.nickname === nickname)

	console.log(playerToShow)

	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<div className={styles.root}>
			<TopBar src='../logo.jpg' />
			<div className={styles.container} data-aos='fade-left'>
				<div>
					<img src={playerToShow?.detailsImgSrc} alt={playerToShow?.name} />
				</div>
				<div>
					<h2>{playerToShow?.name}</h2>
					<p>
						Pseudonim: <span className={styles.bold}>{playerToShow?.nickname}</span>
					</p>
					<p>
						Identyfikator: <span className={styles.bold}>{playerToShow?.short}</span>
					</p>
					<p>
						Rok urodzenia: <span className={styles.bold}>{playerToShow?.birthYear}</span>
					</p>
					<p>
						Miasto: <span className={styles.bold}>{playerToShow?.city}</span>
					</p>
					<p>
						Numer koszulki: <span className={styles.bold}>{playerToShow?.number}</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default PlayerDetails
