import PlayerInfo from '../../features/PlayerInfo/PlayerInfo'
import Cards from '../../layout/Cards/Cards'
import TopBar from '../../layout/TopBar/TopBar'
import AboutUs from '../../views/AboutUs/AboutUs'

const Home = () => {
	return (
		<>
			<TopBar src='./logo.jpg' nav={true} />
			<Cards />
		</>
	)
}

export default Home
