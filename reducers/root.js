import { startingResources, tickInfo, factoryInfo, powerPlantInfo } from '../resources/constants'
import { poweredFactories } from '../util/state'

export default (state = {
  resources: {
    credits: startingResources.credits,
  }, 
  gameTime: 0, 
  factories: startingResources.factories,
  powerPlants: startingResources.powerPlants
}, 
action) => {
  
  if (action.suppressLog === undefined) {
    console.log('handling action:', action, state)
  }

  switch (action.type) {
    case 'ADD_CREDITS':
      return {...state, 
        resources: {
          ...state.resources, 
          credits: state.resources.credits + action.numCredits}}
    case 'ADD_GAME_TIME':
      return {...state, gameTime: state.gameTime + action.gameTime}
    case 'ADD_FACTORIES':
      const newFactories = newAssetCount(state.resources, factoryInfo, action.numFactories)
      return {...state, 
        factories: state.factories + newFactories,
        resources: {
          ...state.resources,
          credits: state.resources.credits - (newFactories * factoryInfo.cost.credits)}}
    case 'ADD_POWER_PLANTS':
      const newPowerPlants = newAssetCount(state.resources, powerPlantInfo, action.numPowerPlants)
      return {...state, 
        powerPlants: state.powerPlants + newPowerPlants,
        resources: {
          ...state.resources,
          credits: state.resources.credits - (newPowerPlants * powerPlantInfo.cost.credits)}}
    case 'ADVANCE_GAME_TIME':
      return {...state, 
          resources: {
            ...state.resources, 
            credits: state.resources.credits + newCredits(state, tickInfo.incrementMultiple)},
          gameTime: state.gameTime + tickInfo.incrementMultiple
      }
  }

  return state
}

const newCreditsFromFactories = (state) => {
  const numFactories = poweredFactories(state)
  return numFactories * factoryInfo.creditProduction
}

const newCredits = (state, incrementMultiple) => {
  return newCreditsFromFactories(state) * incrementMultiple
}

const newAssetCount = (maxResourcesToSpend, assetInfo, requestedNewAssetCount) => {
  const maxCreditsToSpend = maxResourcesToSpend.credits
  const assetCost = assetInfo.cost.credits
  const maxNewAssetCount = Math.floor(maxCreditsToSpend / assetCost)
  const newAssetCount = Math.min(maxNewAssetCount, requestedNewAssetCount)
  return newAssetCount 
}