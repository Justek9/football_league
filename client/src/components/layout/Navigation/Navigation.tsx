import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'

const Navigation: FC = () => {
	return (
		<ul className={styles.navigationContainer}>
			<li>
				<Link to='/zawodnicy'>Zawodnicy</Link>
			</li>
			<li>
				<Link to='/mecze'>Mecze</Link>
			</li>
			<li>
				<Link to='/o-nas'>O nas</Link>
			</li>
			<li>
				<Link to='/statystyki'>Statystyki</Link>
			</li>
		</ul>
	)
}

export default Navigation
