import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<div className={`${styles.hamburgerIcon} ${isOpen ? styles.active : ''}`} onClick={toggleMenu}>
				<div className={styles.bar1}></div>
				<div className={styles.bar2}></div>
				<div className={styles.bar3}></div>
			</div>
			<ul className={`${styles.navigationContainer} ${isOpen ? styles.menuOpen : ''}`}>
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
		</>
	)
}

export default Navigation
