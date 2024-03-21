import styles from './ActionsTable.module.scss'

const ActionsTable = () => {
	return (
		<table>
			<caption>Przebieg I połowy</caption>
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
				<tr>
					<td>0</td>
					<td>1</td>
					<td>3</td>
					<td>Paweł Rutkowski</td>
					<td>Kazik</td>
				</tr>
				<tr>
					<td>1</td>
					<td>1</td>
					<td>10</td>
					<td>Jarek</td>
					<td>Justek</td>
				</tr>
				<tr>
					<td>2</td>
					<td>1</td>
					<td>45</td>
					<td>Krzysiek</td>
					<td>Dominik</td>
				</tr>
				<tr>
					<td>3</td>
					<td>1</td>
					<td>60</td>
					<td>Mateusz</td>
					<td>Kazik</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<th scope='row' colspan='4'>
						Wynik końcowy:
					</th>
					<td>3:1</td>
				</tr>
			</tfoot>
		</table>
	)
}

export default ActionsTable
