import TopBar from '../../layout/TopBar/TopBar'
import SectionHeader from '../../views/SectionHeader/SectionHeader'

import AOS from 'aos'
import 'aos/dist/aos.css'

import styles from './AboutUs.module.scss'
import { useEffect } from 'react'

const AboutUs = () => {
	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<div className={styles.root}>
			<TopBar src='../logo.jpg' />
			<div className={styles.container}>
				<SectionHeader header={'O nas'} />
				<p className={styles.text} data-aos='fade-left'>
					Witajcie w świecie naszej amatorskiej ligi piłki nożnej! Jesteśmy pasjonatami futbolu, którzy postanowili
					stworzyć to miejsce dla wszystkich miłośników piłki nożnej w naszej społeczności. Nasza liga została założona
					z myślą o tym, aby stworzyć przyjazne środowisko dla wszystkich, którzy kochają ten piękny sport i chcą się
					razem bawić oraz rywalizować. Niezależnie od tego, czy jesteś zawodnikiem, kibicem czy po prostu osobą
					zainteresowaną wydarzeniami w naszej lidze, ta strona jest dedykowana dla Ciebie. Tutaj znajdziesz najświeższe
					informacje na temat naszych meczów, zawodników, statystyk oraz wiele innych ciekawych treści związanych z
					piłką nożną. Dołącz do naszej pasjonującej przygody piłkarskiej i bądź częścią naszej ligowej społeczności!
				</p>
			</div>
		</div>
	)
}

export default AboutUs
