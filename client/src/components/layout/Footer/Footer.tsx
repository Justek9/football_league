import styles from './Footer.module.scss'

const Footer = () => {
	return <footer className={styles.footer}>Copyright {new Date().getFullYear()}</footer>
}

export default Footer
