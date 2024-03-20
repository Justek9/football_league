import Game from '../../common/Game/Game'
import Cards from '../../layout/Cards/Cards'
import TopBar from '../../layout/TopBar/TopBar'

const Home = () => {
	return (
		<>
			<TopBar src='./logo.jpg' />
			<Game />
			<Cards />
		</>
	)
}

export default Home
