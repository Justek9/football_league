import styles from './ActionsTable.module.scss'

type ActionsTableProps = {
	actions: any[]
}

const ActionsTable = ({ actions }: ActionsTableProps) => {
	let scoreRed = 0
	let scoreGreen = 0

	return (
		<table className={styles.table}>
			<caption>Przebieg meczu</caption>
			<thead>
				<tr>
					<th scope='col'>ZI</th>
					<th scope='col'>CZ</th>
					<th scope='col'>Minuta</th>
					<th scope='col'>Strzelał</th>
					<th scope='col'>Asysta</th>
				</tr>
			</thead>
			<tbody>
				{actions.map((action, i) => {
					if (action.score === 'red') scoreRed++
					if (action.score === 'green') scoreGreen++
					return (
						<tr key={i}>
							<td>{scoreGreen}</td>
							<td>{scoreRed}</td>
							<td>{action.minute}'</td>
							<td>{action.player}</td>
							<td>{action.assist}</td>
						</tr>
					)
				})}
			</tbody>
			<tfoot>
				<tr>
					<th scope='row' colSpan={4}>
						Wynik końcowy (zieloni : czerwoni):
					</th>
					<td>
						{scoreGreen} : {scoreRed}
					</td>
				</tr>
			</tfoot>
		</table>
	)
}

export default ActionsTable
