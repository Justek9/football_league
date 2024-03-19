import styles from './MenuCard.module.scss'

type MenuCardProps = {
	title: string
	src: string
}

const MenuCard = ({ title, src }: MenuCardProps) => {
	return (
		<div className={styles.card}>
			<img src={src} alt={title}></img>
			<h2>{title}</h2>
		</div>
	)
}

export default MenuCard
