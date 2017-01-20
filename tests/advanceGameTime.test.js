import { advanceGameTime } from '../actions/index.js'
import root from '../reducers/root'
import { tickInfo } from '../resources/constants'

const minimalState = {resources: {}}

test('advancing game time doesnt change unknown property', () => {
	expect(root({...minimalState, a: 1}, advanceGameTime()).a).toEqual(1)
})

test('advancing game time updates credits based on number of factories', () => {
	expect(root({resources: {credits: 100}, factories: 0}, advanceGameTime()).resources.credits).toEqual(100)
	expect(root({resources: {credits: 100}, factories: 2}, advanceGameTime()).resources.credits).toEqual(100 + 2 * tickInfo.incrementMultiple)
})

test('advancing game time updates gameTime', () => {
	expect(root({...minimalState, gameTime: 5}, advanceGameTime()).gameTime).toEqual(5 + tickInfo.incrementMultiple)
})
