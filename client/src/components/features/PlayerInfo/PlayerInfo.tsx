import { useEffect, useState } from 'react'
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner'
import PlayerOverview from '../../views/PlayerOverview/PlayerOverview'
import SectionHeader from '../../views/SectionHeader/SectionHeader'
import styles from './PlayerInfo.module.scss'

export type Player = {
	name: string
	nickname: string
	birthYear: number
	city: string
	active: boolean
	imgSrc: string
}

const PlayerInfo = () => {
	const [players, setPlayers] = useState<Player[] | []>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		fetch('http://localhost:8000/api/players')
			.then(res => res.json())
			.then(data => {
				setPlayers(data)
				setLoading(false)
			})
	}, [])

	return (
		<>
			<div id='zawodnicy' className={styles.root}>
				<SectionHeader header={'Zawodnicy'} />
				{loading && <LoadingSpinner />}
				{!loading && (
					<section className={styles.container}>
						{players.map(player => {
							return <PlayerOverview key={player.name} player={player} />
						})}
					</section>
				)}
			</div>
		</>
	)
}

export default PlayerInfo
