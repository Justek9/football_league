import { useState } from 'react'
import { useAppSelctor } from '../../../redux/store'
import Game from '../../common/Game/Game'
import TopBar from '../../layout/TopBar/TopBar'
import SectionHeader from '../../views/SectionHeader/SectionHeader'
import styles from './Games.module.scss'

const Games = () => {
	const games = useAppSelctor(state => state.games.games)
	const [gameToShow, setGameToShow] = useState(games.slice(-1))

	return (
		<div className={styles.root}>
			<TopBar src='../logo.jpg' />
			<div className={styles.container}>
				<SectionHeader header={'Mecze'} />
			</div>
			<div className={styles.dates}>
				{games.map((g, i) => {
					return (
						<span
							key={i}
							onClick={() => setGameToShow([g])}
							className={g.date === gameToShow[0].date ? styles.active : ''}>
							{g.date.slice(0, 10)}
						</span>
					)
				})}
			</div>
			<Game latestGame={gameToShow} showMore={false} />
		</div>
	)
}

export default Games
