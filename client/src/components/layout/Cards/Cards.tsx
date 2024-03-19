import MenuCard from '../../common/MenuCard/MenuCard'
import styles from './Cards.module.scss'
import { cards } from '../../../cardsData'

const Cards = () => {
	return (
		<div className={styles.container}>
			{cards.map(card => (
				<MenuCard title={card.title} src={card.src} />
			))}
		</div>
	)
}

export default Cards
