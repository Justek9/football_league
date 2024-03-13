import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import PlayerDetails from './components/pages/PlayerDetails/PlayerDetails'

function App() {
	return (
		<div className='container'>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/player/:nickname' element={<PlayerDetails />}></Route>
			</Routes>
		</div>
	)
}

export default App
