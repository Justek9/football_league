import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './MenuCard.module.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

type MenuCardProps = {
	title: string
	src: string
}

const MenuCard = ({ title, src }: MenuCardProps) => {
	useEffect(() => {
		AOS.init()
	}, [])

	const navigate = useNavigate()
	const cardClickHandler = () => {
		navigate(`/${title.toLowerCase()}`)
	}

	return (
		<div data-aos='fade-left' className={styles.card} onClick={cardClickHandler}>
			<img src={src} alt={title}></img>
			<h2>{title}</h2>
		</div>
	)
}

export default MenuCard
