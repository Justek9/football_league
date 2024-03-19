import TopBar from '../../layout/TopBar/TopBar'
import SectionHeader from '../../views/SectionHeader/SectionHeader'
import styles from './Photos.module.scss'

const Photos = () => {
	return (
		<div className={styles.root}>
			<TopBar src='../logo.jpg' nav={false} />
			<div className={styles.container}>
				<SectionHeader header={'Zdjęcia'} />
			</div>
		</div>
	)
}

export default Photos
