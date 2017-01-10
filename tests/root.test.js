import { addToSequence, addCredits, addGameTime, addFactories } from '../actions/index.js'
import root from '../reducers/root'

test('default state items exist', () => {
	const state = root(undefined, {type: undefined})
	expect(state.credits).not.toEqual(undefined)
	expect(state.gameTime).not.toEqual(undefined)
	expect(state.numFactories).not.toEqual(undefined)
})

test('add the amount of credits', () => {
	expect(root({somethingElse: 1, credits: 10}, addCredits(5))).toEqual({somethingElse: 1, credits: 15})
	expect(root({credits: 10}, addCredits(-5))).toEqual({credits: 5})
})

test('adding game time', () => {
	expect(root({somethingElse: 1, gameTime: 100}, addGameTime(1))).toEqual({somethingElse: 1, gameTime: 101})
})

test('adding factories', () => {
	expect(root({somethingElse: 1, factories: 5}, addFactories(1))).toEqual({somethingElse: 1, factories: 6})
})

//test('subtracting game time throws', () => {
//	expect(root({credits: 10}, addCredits(5))).toEqual({credits: 15})
//})