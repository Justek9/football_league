import { Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer/Footer'
import Home from './components/pages/Home/Home'
import PlayerDetails from './components/pages/PlayerDetails/PlayerDetails'

function App() {
	return (
		<div className='container'>
			<div className='flex'>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/player/:nickname' element={<PlayerDetails />}></Route>
				</Routes>
			</div>
			<Footer />
		</div>
	)
}

export default App
