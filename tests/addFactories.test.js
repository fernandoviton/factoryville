import { addFactories as addAsset } from '../actions/index.js'
import reducer from '../reducers/root'
import { factoryInfo as assetInfo } from '../resources/constants'
import testAsset from './testAsset'

const assetName = 'factories'

const makeState = (assetCount, credits, someOtherResource = 1) => {
	return {factories: assetCount, resources: { someOtherResource: someOtherResource, credits: credits }}
}

describe('test ' + assetName, () => {
  testAsset(assetName, assetInfo, addAsset, reducer, makeState);
});