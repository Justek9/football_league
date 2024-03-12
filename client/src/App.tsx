import TopBar from './components/layout/TopBar/TopBar'
import React from 'react'
import PlayerInfo from './components/features/PlayerInfo/PlayerInfo'
import AboutUs from './components/views/AboutUs/AboutUs'

function App() {
	return (
		<div className='container'>
			<TopBar />
			<PlayerInfo />
			<AboutUs />
		</div>
	)
}

export default App
