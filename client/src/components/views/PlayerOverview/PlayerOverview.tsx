import { useNavigate } from 'react-router-dom'
import { Player } from '../../../redux/playersReducer'
import styles from './PlayerOverview.module.scss'

type PlayerOverviewProps = {
	player: Player
}

const PlayerOverview = ({ player }: PlayerOverviewProps) => {
	const navigate = useNavigate()
	const playerDetailsHandler = () => {
		navigate(`/player/${player.nickname}`)
	}

	return (
		<div className={styles.container}>
			<img src={player.imgSrc} alt={player.name} className={styles.img} onClick={playerDetailsHandler} />
			<p className={styles.name}>{player.name}</p>
			<p className={styles.nickname}>{player.nickname}</p>
			<p>{player.birthYear}</p>
			<p>{player.city}</p>
		</div>
	)
}

export default PlayerOverview
