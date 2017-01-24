import { addToSequence, addCredits, addGameTime, addFactories, addPowerPlants } from '../actions/index.js'
import root from '../reducers/root'

test('default state items exist', () => {
	const state = root(undefined, {type: undefined})
	expect(state.resources.credits).not.toEqual(undefined)
	expect(state.gameTime).not.toEqual(undefined)
	expect(state.factories).not.toEqual(undefined)
})

test('add the amount of credits', () => {
	expect(root({somethingElse: 1, resources: {credits: 10}}, addCredits(5))).toEqual({somethingElse: 1, resources: {credits: 15}})
	expect(root({resources: {credits: 10}}, addCredits(-5))).toEqual({resources: {credits: 5}})
	expect(root({resources: {somethingElse: 1, credits: 10}}, addCredits(-5))).toEqual({resources: {somethingElse: 1, credits: 5}})
})

test('adding game time', () => {
	expect(root({somethingElse: 1, gameTime: 100}, addGameTime(1))).toEqual({somethingElse: 1, gameTime: 101})
})