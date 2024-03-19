import { Navigate, useNavigate } from 'react-router-dom'
import styles from './MenuCard.module.scss'

type MenuCardProps = {
	title: string
	src: string
}

const MenuCard = ({ title, src }: MenuCardProps) => {
	const navigate = useNavigate()
	const cardClickHandler = () => {
		navigate(`/${title.toLowerCase()}`)
	}

	return (
		<div className={styles.card} onClick={cardClickHandler}>
			<img src={src} alt={title}></img>
			<h2>{title}</h2>
		</div>
	)
}

export default MenuCard
