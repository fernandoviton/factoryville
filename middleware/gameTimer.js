import { tickInfo } from '../resources/constants'
import { addCredits } from '../actions/index.js'


export const startGameTimer = (store) => {
	setInterval( 
		(incrementMultiple) => {
 			// TODO: change to an action that advances all that is needed
 			store.dispatch(addCredits(incrementMultiple))
		}, tickInfo.frequenceInMs, tickInfo.incrementMultiple)
}