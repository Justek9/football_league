import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import styles from './GallerySlider.module.scss'

type GallerySliderProps = {
	slides: string[]
}
const GallerySlider = ({ slides }: GallerySliderProps) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	console.log(slides[currentIndex])

	const goToNext = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}
	const goToPrevious = () => {
		const isLastSlide = currentIndex === slides.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	const goToSlide = (index: number) => {
		setCurrentIndex(index)
	}

	return (
		<div className={styles.root}>
			<div className={`${styles.arrow}`} style={{ left: '32px' }} onClick={goToPrevious}>
				<FontAwesomeIcon icon={faArrowLeft} />
			</div>
			<div className={`${styles.arrow}`} style={{ right: '32px' }} onClick={goToNext}>
				<FontAwesomeIcon icon={faArrowRight} />
			</div>
					<img className={styles.slideStyles} src={slides[currentIndex]}></img>
			<div className={styles.dotsContainer}>
				{slides.map((slide, index) => (
					<div className={styles.dotStyle} key={index} onClick={() => goToSlide(index)}>
						&bull;
					</div>
				))}
			</div>
		</div>
	)
}

export default GallerySlider
