import { advanceGameTime } from '../actions/index.js'
import root from '../reducers/root'
import { tickInfo } from '../resources/constants'

test('advancing game time doesnt change unknown property', () => {
	expect(root({a: 1}, advanceGameTime()).a).toEqual(1)
})

test('advancing game time updates credits based on number of factories', () => {
	expect(root({credits: 100, factories: 0}, advanceGameTime()).credits).toEqual(100)
	expect(root({credits: 100, factories: 2}, advanceGameTime()).credits).toEqual(100 + 2 * tickInfo.incrementMultiple)
})

test('advancing game time updates gameTime', () => {
	expect(root({gameTime: 5}, advanceGameTime()).gameTime).toEqual(5 + tickInfo.incrementMultiple)
})
