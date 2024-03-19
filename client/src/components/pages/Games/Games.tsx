import TopBar from '../../layout/TopBar/TopBar'
import SectionHeader from '../../views/SectionHeader/SectionHeader'
import styles from './Games.module.scss'

const Games = () => {
	return (
		<div className={styles.root}>
			<TopBar src='../logo.jpg' nav={false} />
			<div className={styles.container}>
				<SectionHeader header={'Mecze'} />
			</div>
		</div>
	)
}

export default Games
