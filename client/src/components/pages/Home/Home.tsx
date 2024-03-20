import { useEffect, useState } from 'react'
import Game from '../../common/Game/Game'
import Cards from '../../layout/Cards/Cards'
import TopBar from '../../layout/TopBar/TopBar'

export type LatestGame = {
	number: number
	actions: string[]
	minutes: string
	aditionalInfo: string
	result: string
	date: string
	players: string[]
}

const Home = () => {
	const [game, setGame] = useState<LatestGame[] | []>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		fetch('http://localhost:8000/api/games')
			.then(res => res.json())
			.then(data => {
				console.log(data)
				setGame(data)
				setLoading(false)
			})
			.catch(error => {
				console.error('Error fetching data:', error)
				setLoading(false)
			})
	}, [])

	return (
		<>
			<TopBar src='./logo.jpg' />
			{!loading && game && <Game latestGame={game} />}
			<Cards />
		</>
	)
}

export default Home
