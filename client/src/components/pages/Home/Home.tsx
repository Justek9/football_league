import { useEffect, useState } from 'react'
import { convertCompilerOptionsFromJson } from 'typescript'
import { addGames } from '../../../redux/gamesReducer'
import { useAppDispatch } from '../../../redux/store'
import Game from '../../common/Game/Game'
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner'
import Cards from '../../layout/Cards/Cards'
import TopBar from '../../layout/TopBar/TopBar'
import SectionHeader from '../../views/SectionHeader/SectionHeader'

import styles from './Home.module.scss'

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
	const [games, setGames] = useState<LatestGame[] | []>([])
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
				setLoading(false)
				dispatch(addGames({ games: data }))
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
				{!loading && !error && games && <Game games={games} latestGame={games.slice(-1)} />}
				<Cards />
			</div>
		</>
	)
}

export default Home
