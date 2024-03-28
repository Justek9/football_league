import { useEffect } from 'react'
import TopBar from '../../layout/TopBar/TopBar'
import PlayerOverview from '../../views/PlayerOverview/PlayerOverview'
import SectionHeader from '../../views/SectionHeader/SectionHeader'
import { useAppSelctor } from '../../../redux/store'

import AOS from 'aos'
import 'aos/dist/aos.css'

import styles from './PlayerInfo.module.scss'
import { useNavigate } from 'react-router-dom'

const PlayerInfo = () => {
	const players = useAppSelctor(state => state.players.players)
	const navigate = useNavigate()

	useEffect(() => {
		AOS.init()
		if (players.length === 0) navigate('/')
	}, [players, navigate])

	return (
		<>
			<TopBar src='../logo.jpg' />
			<div id='zawodnicy' className={styles.root}>
				<SectionHeader header={'Zawodnicy'} />

				<section className={styles.container} data-aos='fade-left'>
					{players.map(player => {
						return <PlayerOverview game={false} key={player.name} player={player} />
					})}
				</section>
			</div>
		</>
	)
}

export default PlayerInfo
