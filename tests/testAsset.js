export default (assetName, assetInfo, addAsset, reducer, makeState) => {

	const costPerAsset = assetInfo.cost.credits

	test('adding ' + assetName + ' leaves unknown state alone', () => {
		expect(reducer(Object.assign({somethingElse: 1}, makeState(0, 0)), addAsset(2)).somethingElse).toEqual(1)
		expect(reducer(makeState(0, 0, 1), addAsset(2)).resources.someOtherResource).toEqual(1)
	})

	test('adding ' + assetName + ' leaves unknown state alone', () => {
		expect(reducer(Object.assign({somethingElse: 1}, makeState(0, 0)), addAsset(2)).somethingElse).toEqual(1)
		expect(reducer(makeState(0, 0, 1), addAsset(2)).resources.someOtherResource).toEqual(1)
	})
	
	test('adding ' + assetName + ' removes credits and increments', () => {
		expect(reducer(makeState(0, costPerAsset * 3), addAsset(1))).toEqual(makeState(1, costPerAsset * 2))
		expect(reducer(makeState(100, costPerAsset * 3), addAsset(2))).toEqual(makeState(102, costPerAsset))
		expect(reducer(makeState(0, costPerAsset * 3), addAsset(3))).toEqual(makeState(3, 0))
		expect(reducer(makeState(0, costPerAsset * 3 - 1), addAsset(2))).toEqual(makeState(2, costPerAsset - 1))
	})

	test('adding ' + assetName + ' when only enough credits for some adds what it can', () => {
		expect(reducer(makeState(0, costPerAsset * 3), addAsset(4))).toEqual(makeState(3, 0))
		expect(reducer(makeState(0, costPerAsset * 2 - 1), addAsset(4))).toEqual(makeState(1, costPerAsset - 1))
	})

	test('adding ' + assetName + ' when not enough credits for one adds none', () => {
		expect(reducer(makeState(5, 0), addAsset(1))).toEqual(makeState(5, 0))
		expect(reducer(makeState(5, 0), addAsset(2))).toEqual(makeState(5, 0))
		expect(reducer(makeState(5, costPerAsset - 1), addAsset(1))).toEqual(makeState(5, costPerAsset - 1))
	})
}