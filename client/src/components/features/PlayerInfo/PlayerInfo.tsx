import { useEffect, useState } from 'react'
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
	useEffect(() => {
		fetch('http://localhost:8000/api/players')
			.then(res => res.json())
			.then(data => setPlayers(data))
	}, [])

	return (
		<>
			<div id='zawodnicy' className={styles.root}>
				<SectionHeader header={'Zawodnicy'} />
				<section className={styles.container}>
					{players.map(player => {
						return <PlayerOverview key={player.name} player={player} />
					})}
				</section>
			</div>
		</>
	)
}

export default PlayerInfo
