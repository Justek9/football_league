import styles from './ActionsTable.module.scss'

const ActionsTable = () => {
	const actions = [
		{ score: 'green', player: 'Paweł Rutkowski', assist: 'Kazik', minute: '3' },
		{ score: 'green', player: 'Jarek', assist: 'Justek', minute: '10' },
		{ score: 'red', player: 'Krzysiek', assist: 'Dominik', minute: '45' },
		{ score: 'red', player: 'Krzysiek', assist: 'Dominik', minute: '50' },
		{ score: 'red', player: 'Krzysiek', assist: 'Dominik', minute: '51' },
		{ score: 'red', player: 'Krzysiek', assist: 'Dominik', minute: '54' },
	]
	let scoreRed = 0
	let scoreGreen = 0

	return (
		<table>
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
				{actions.map(action => {
					if (action.score === 'red') scoreRed++
					if (action.score === 'green') scoreGreen++
					return (
						<tr>
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
					<th scope='row' colspan='4'>
						Wynik końcowy:
					</th>
					<td>
						{scoreGreen}:{scoreRed}
					</td>
				</tr>
			</tfoot>
		</table>
	)
}

export default ActionsTable
