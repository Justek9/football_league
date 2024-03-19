import TopBar from '../../layout/TopBar/TopBar'
import SectionHeader from '../../views/SectionHeader/SectionHeader'
import styles from './Stats.module.scss'

const Stats = () => {
	return (
		<div className={styles.root}>
			<TopBar src='../logo.jpg' nav={false} />
			<div className={styles.container}>
				<SectionHeader header={'Statystyki'} />
			</div>
		</div>
	)
}

export default Stats
