import { Route, Routes } from 'react-router-dom'
import PlayerInfo from './components/features/PlayerInfo/PlayerInfo'
import Footer from './components/layout/Footer/Footer'
import Games from './components/pages/Games/Games'
import Home from './components/pages/Home/Home'
import Photos from './components/pages/Photos/Photos'
import PlayerDetails from './components/pages/PlayerDetails/PlayerDetails'
import Stats from './components/pages/Stats/Stats'
import AboutUs from './components/pages/AboutUs/AboutUs'

function App() {
	return (
		<div className='container'>
			<div className='flex'>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/player/:nickname' element={<PlayerDetails />}></Route>
					<Route path='/zawodnicy' element={<PlayerInfo />}></Route>
					<Route path='/o-nas' element={<AboutUs />}></Route>
					<Route path='/mecze' element={<Games />}></Route>
					<Route path='/zdjęcia' element={<Photos />}></Route>
					<Route path='/statystyki' element={<Stats />}></Route>
				</Routes>
			</div>
			<Footer />
		</div>
	)
}

export default App
