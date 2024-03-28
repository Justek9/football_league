import { useEffect, useState } from 'react'
import { addGames } from '../../../redux/gamesReducer'
import { addPlayers } from '../../../redux/playersReducer'
import { useAppDispatch } from '../../../redux/store'
import Game from '../../common/Game/Game'
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner'
import Cards from '../../layout/Cards/Cards'
import TopBar from '../../layout/TopBar/TopBar'
import SectionHeader from '../../views/SectionHeader/SectionHeader'
import { SingleGame } from '../../../redux/gamesReducer'
import styles from './Home.module.scss'

const Home = () => {
	const [games, setGames] = useState<SingleGame[] | []>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	const dispatch = useAppDispatch()

	useEffect(() => {
		setLoading(true)
		setError(false)
		fetch('http://localhost:8000/api/games')
			.then(res => res.json())
			.then(data => {
				setGames(data)
				dispatch(addGames({ games: data }))
			})
			.catch(error => {
				console.error('Error fetching data:', error)
				setError(true)
			})

		fetch('http://localhost:8000/api/players')
			.then(res => res.json())
			.then(data => {
				dispatch(addPlayers({ players: data }))
				setLoading(false)
			})
			.catch(error => {
				console.error('Error fetching data:', error)
				setLoading(false)
				setError(true)
			})
	}, [])

	return (
		<>
			<TopBar src='./logo.jpg' />
			<div className={styles.container}>
				<SectionHeader header='Ostatni mecz' />
				{error && <p>Errror occured while fetching data...Please try again</p>}
				{loading && <LoadingSpinner />}
				{!loading && !error && games && <Game showMore={true} games={games} latestGame={games.slice(-1)[0]} />}
				<Cards />
			</div>
		</>
	)
}

export default Home
