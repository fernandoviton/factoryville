import { addPowerPlants as addAsset } from '../actions/index.js'
import reducer from '../reducers/root'
import { powerPlantInfo as assetInfo } from '../resources/constants'
import testAsset from './testAsset'

const assetName = 'powerPlants'

const makeState = (assetCount, credits, someOtherResource = 1) => {
	return {powerPlants: assetCount, resources: { someOtherResource: someOtherResource, credits: credits }}
}

describe('test ' + assetName, () => {
  testAsset(assetName, assetInfo, addAsset, reducer, makeState);
});