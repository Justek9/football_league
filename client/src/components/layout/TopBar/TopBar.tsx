import { useNavigate } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import styles from './TopBar.module.scss'

type TopBarProps = {
	src: string
}

const TopBar = ({ src }: TopBarProps) => {
	const navigate = useNavigate()
	const goToMainPageHandler = () => {
		navigate('/')
	}
	return (
		<nav className={styles.root}>
			<img src={src} onClick={goToMainPageHandler}></img>
			 <Navigation />
		</nav>
	)
}

export default TopBar
