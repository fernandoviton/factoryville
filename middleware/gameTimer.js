import { tickInfo } from '../resources/constants'
import { advanceGameTime } from '../actions/index.js'

export const startGameTimer = (store) => {
	setInterval( 
		() => {
 			store.dispatch(advanceGameTime())
		}, tickInfo.frequenceInMs)
}