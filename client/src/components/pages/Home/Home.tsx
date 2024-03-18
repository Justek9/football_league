import PlayerInfo from '../../features/PlayerInfo/PlayerInfo'
import Main from '../../layout/Main/Main'
import TopBar from '../../layout/TopBar/TopBar'
import AboutUs from '../../views/AboutUs/AboutUs'

const Home = () => {
	return (
		<>
			<TopBar src='./logo.jpg' nav={true} />
			<Main />
			<PlayerInfo />
			<AboutUs />
		</>
	)
}

export default Home
