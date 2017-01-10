import { addToSequence, addCredits, addGameTime } from '../actions/index.js'
import root from '../reducers/root'

test('add the amount of credits', () => {
	expect(root({somethingElse: 1, credits: 10}, addCredits(5))).toEqual({somethingElse: 1, credits: 15})
	expect(root({credits: 10}, addCredits(-5))).toEqual({credits: 5})
})

test('adding game time', () => {
	expect(root({somethingElse: 1, gameTime: 100}, addGameTime(1))).toEqual({somethingElse: 1, gameTime: 101})
})

//test('subtracting game time throws', () => {
//	expect(root({credits: 10}, addCredits(5))).toEqual({credits: 15})
//})