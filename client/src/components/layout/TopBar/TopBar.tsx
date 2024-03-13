import { useNavigate } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import styles from './TopBar.module.scss'

type TopBarProps = {
	src: string
	nav: boolean
}

const TopBar = ({ src, nav }: TopBarProps) => {
	const navigate = useNavigate()
	const goToMainPageHandler = () => {
		navigate('/')
	}
	return (
		<nav className={styles.root}>
			<img src={src} onClick={goToMainPageHandler}></img>
			{nav && <Navigation />}
		</nav>
	)
}

export default TopBar
