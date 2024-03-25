import { useAppSelctor } from '../../../redux/store'
import TopBar from '../../layout/TopBar/TopBar'
import SectionHeader from '../../views/SectionHeader/SectionHeader'
import styles from './Games.module.scss'

const Games = () => {
	const games = useAppSelctor(state => state.games.games)
	console.log(games)

	return (
		<div className={styles.root}>
			<TopBar src='../logo.jpg' />
			<div className={styles.container}>
				<SectionHeader header={'Mecze'} />
			</div>
			{games.map((g, i) => {
				return <span key={i}>{g.date.slice(0, 10)}</span>
			})}
		</div>
	)
}

export default Games
