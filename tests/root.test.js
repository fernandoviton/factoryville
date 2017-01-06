import { addToSequence, addCredits } from '../actions/index.js'
import root from '../reducers/root'

test('add the amount of credits', () => {
	expect(root({credits: 10}, addCredits(5))).toEqual({credits: 15})
	expect(root({credits: 10}, addCredits(-5))).toEqual({credits: 5})
})