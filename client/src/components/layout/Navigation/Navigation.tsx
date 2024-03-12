import React, { FC } from 'react'
import styles from './Navigation.module.scss'

const Navigation: FC = () => {
	return (
		<ul className={styles.navigationContainer}>
			<li>
				<a href='#zawodnicy'>Zawodnicy</a>
			</li>
			<li>
				<a href='#mecze'>Mecze</a>
			</li>
			<li>
				<a href='#o-nas'>O nas</a>
			</li>
			<li>
				<a href='#o-nas'>Statystyki</a>
			</li>
		</ul>
	)
}

export default Navigation
