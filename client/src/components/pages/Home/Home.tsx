import PlayerInfo from '../../features/PlayerInfo/PlayerInfo'
import TopBar from '../../layout/TopBar/TopBar'
import AboutUs from '../../views/AboutUs/AboutUs'

const Home = () => {
	return (
		<>
			<TopBar src='./logo.jpg' nav={true} />
			<PlayerInfo />
			<AboutUs />
		</>
	)
}

export default Home
