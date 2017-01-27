import { factoryInfo, powerPlantInfo } from '../resources/constants'
import { poweredFactories, unusedPower } from '../util/state'

const poweredFactoriesGivenNumPowerPlants = (numPowerPlants) => { return numPowerPlants * powerPlantInfo.powerProduction / factoryInfo.requiredPower }

test('poweredFactories', () => {
	expect(poweredFactories({factories: poweredFactoriesGivenNumPowerPlants(12), powerPlants: 12})).toEqual(poweredFactoriesGivenNumPowerPlants(12))
	expect(poweredFactories({factories: poweredFactoriesGivenNumPowerPlants(12), powerPlants: 11})).toEqual(poweredFactoriesGivenNumPowerPlants(11))
	expect(poweredFactories({factories: poweredFactoriesGivenNumPowerPlants(12), powerPlants: 13})).toEqual(poweredFactoriesGivenNumPowerPlants(12))
})

test('unusedPower', () => {
	expect(unusedPower({factories: poweredFactoriesGivenNumPowerPlants(12), powerPlants: 12})).toEqual(0)
	expect(unusedPower({factories: poweredFactoriesGivenNumPowerPlants(12), powerPlants: 11})).toEqual(0)
	expect(unusedPower({factories: poweredFactoriesGivenNumPowerPlants(12), powerPlants: 13})).toEqual(powerPlantInfo.powerProduction)
})