import React, { FC } from 'react'
import Navigation from '../Navigation/Navigation'
import styles from './TopBar.module.scss'

const TopBar = () => {
	return (
		<nav className={styles.root}>
			<img src='./logo.jpg'></img>
			<Navigation />
		</nav>
	)
}

export default TopBar
