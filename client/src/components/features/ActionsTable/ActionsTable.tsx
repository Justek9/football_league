import { STATES } from 'mongoose'
import { useAppSelctor } from '../../../redux/store'
import styles from './ActionsTable.module.scss'
import { SingleGame } from '../../../redux/gamesReducer'

type ActionsTableProps = {
	latestGame: SingleGame
}

const ActionsTable = ({ latestGame }: ActionsTableProps) => {
	let scoreRed = 0
	let scoreGreen = 0
	const players = useAppSelctor(state => state.players.players)

	const getFullName = (short: string) => {
		let fullName

		players.find(player => {
			if (player.short === short) fullName = player.name
		})

		return fullName
	}

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
				{latestGame?.actions?.map((action, i) => {
					if (latestGame.players[0].green.includes(action.player)) scoreGreen++
					if (latestGame.players[0].red.includes(action.player)) scoreRed++
				
					return (
						<tr key={i}>
							<td>{scoreGreen}</td>
							<td>{scoreRed}</td>
							<td>{action.minute}'</td>
							<td>{getFullName(action.player)}</td>
							<td>{getFullName(action.assist)}</td>
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
