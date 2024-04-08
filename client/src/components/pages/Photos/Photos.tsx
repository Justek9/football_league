import GallerySlider from '../../features/GallerySlider/GallerySlider'
import TopBar from '../../layout/TopBar/TopBar'
import SectionHeader from '../../views/SectionHeader/SectionHeader'
import styles from './Photos.module.scss'

const Photos = () => {
	const slides = [
		'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		'https://images.pexels.com/photos/797900/pexels-photo-797900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		'https://images.pexels.com/photos/972513/pexels-photo-972513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	]
	return (
		<div className={styles.root}>
			<TopBar src='../logo.jpg' />
			<div className={styles.container}>
				<SectionHeader header={'Zdjęcia'} />
				<GallerySlider slides={slides} />
			</div>
		</div>
	)
}

export default Photos
