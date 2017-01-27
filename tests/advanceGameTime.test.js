import { advanceGameTime } from '../actions/index.js'
import root from '../reducers/root'
import { tickInfo, factoryInfo, powerPlantInfo } from '../resources/constants'

const minimalState = {resources: {}}

test('advancing game time doesnt change unknown property', () => {
	expect(root({...minimalState, a: 1}, advanceGameTime()).a).toEqual(1)
})

test('advancing game time updates credits based on number of factories (assuming all are powered)', () => {
	expect(root({resources: {credits: 100}, powerPlants: 10000, factories: 0}, advanceGameTime()).resources.credits).toEqual(100)
	expect(root({resources: {credits: 100}, powerPlants: 10000, factories: 10}, advanceGameTime()).resources.credits).toEqual(100 + 10 * tickInfo.incrementMultiple * factoryInfo.creditProduction)
})

test('advancing game time updates credits based on number of powered factories', () => {
	const numberOfFactoriesPoweredBy100PowerPlants = (powerPlantInfo.powerProduction * 100) / factoryInfo.requiredPower
	const creditsExpected = numberOfFactoriesPoweredBy100PowerPlants * factoryInfo.creditProduction * tickInfo.incrementMultiple
	
	expect(root({resources: {credits: 0}, powerPlants: 100, factories: numberOfFactoriesPoweredBy100PowerPlants * 2}, advanceGameTime()).resources.credits)
		.toEqual(creditsExpected)
	expect(root({resources: {credits: 0}, powerPlants: 100, factories: numberOfFactoriesPoweredBy100PowerPlants}, advanceGameTime()).resources.credits)
		.toEqual(creditsExpected)
	expect(root({resources: {credits: 0}, powerPlants: 100, factories: numberOfFactoriesPoweredBy100PowerPlants + 1}, advanceGameTime()).resources.credits)
		.toEqual(creditsExpected)
})


test('advancing game time updates gameTime', () => {
	expect(root({...minimalState, gameTime: 5}, advanceGameTime()).gameTime).toEqual(5 + tickInfo.incrementMultiple)
})
