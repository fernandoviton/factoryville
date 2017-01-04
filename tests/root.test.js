import { addToSequence } from '../actions/index.js'
import root from '../reducers/root'

test('default root state', () => {
	expect(root(undefined, {type: undefined})).toEqual(
		{
			numbers: [1, 1]
		})
})

test('add to sequence adds next fib number', () => {
	expect(root({numbers:[1,1]}, addToSequence())).toEqual(
		{
			numbers: [1,1,2]
		})
})