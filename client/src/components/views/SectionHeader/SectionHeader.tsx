import styles from './SectionHeader.module.scss'

type SectionHeaderProps = {
	header: string
}
const SectionHeader = ({ header }: SectionHeaderProps) => {
	return (
		<div className={styles.container}>
			<h1>{header}</h1>
			<div className={styles.line}></div>
		</div>
	)
}

export default SectionHeader
