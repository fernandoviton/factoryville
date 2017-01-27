import { factoryInfo, powerPlantInfo } from '../resources/constants'

export const poweredFactories = (state) => {
  const maxPoweredFactories = state.powerPlants * powerPlantInfo.powerProduction / factoryInfo.requiredPower
  return Math.min(maxPoweredFactories, state.factories)
}

export const unusedPower = (state) => {
	const totalPower = state.powerPlants * powerPlantInfo.powerProduction
	const powerRequested = state.factories * factoryInfo.requiredPower
	return Math.max(0, totalPower - powerRequested)
}