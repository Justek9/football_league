import { useEffect, useState } from 'react'
import SectionHeader from '../../views/SectionHeader/SectionHeader'
import styles from './PlayerInfo.module.scss'

type Player = {
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
						return (
							<div key={player.name}>
								<img src={player.imgSrc} alt={player.name} className={styles.img} />
								<p>{player.name}</p>
								<p>{player.nickname}</p>
								<p>{player.birthYear}</p>
								<p>{player.city}</p>
							</div>
						)
					})}
				</section>
			</div>
		</>
	)
}

export default PlayerInfo
