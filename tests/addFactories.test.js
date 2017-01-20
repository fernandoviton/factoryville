import { addFactories } from '../actions/index.js'
import root from '../reducers/root'
import { factoryInfo } from '../resources/constants'

test('adding factories leaves unknown state alone', () => {
	expect(root({somethingElse: 1, factories: 0, credits: 0}, addFactories(2)).somethingElse).toEqual(1)
})

test('adding factories removes credits and adds factories', () => {
	expect(root({credits: factoryInfo.cost * 3, factories: 0}, addFactories(1))).toEqual({credits: factoryInfo.cost * 2, factories: 1})
	expect(root({credits: factoryInfo.cost * 3, factories: 100}, addFactories(2))).toEqual({credits: factoryInfo.cost, factories: 102})
	expect(root({credits: factoryInfo.cost * 3, factories: 0}, addFactories(3))).toEqual({credits: 0, factories: 3})
	expect(root({credits: factoryInfo.cost * 3 - 1, factories: 0}, addFactories(2))).toEqual({credits: factoryInfo.cost - 1, factories: 2})
})

test('adding factories when only enough credits for some adds what it can', () => {
	expect(root({credits: factoryInfo.cost * 3, factories: 0}, addFactories(4))).toEqual({credits: 0, factories: 3})
	expect(root({credits: factoryInfo.cost * 2 - 1, factories: 0}, addFactories(4))).toEqual({credits: factoryInfo.cost - 1, factories: 1})
})

test('adding factories when not enough credits for one adds none', () => {
	expect(root({credits: 0, factories: 5}, addFactories(1))).toEqual({credits: 0, factories: 5})
	expect(root({credits: 0, factories: 5}, addFactories(2))).toEqual({credits: 0, factories: 5})
	expect(root({credits: factoryInfo.cost - 1, factories: 5}, addFactories(1))).toEqual({credits: factoryInfo.cost - 1, factories: 5})
})
