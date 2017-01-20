import { startingResources, tickInfo, factoryInfo } from '../resources/constants'

export default (state = {
  resources: {
    credits: startingResources.credits,
  }, 
  gameTime: 0, 
  factories: startingResources.factories,
  powerPlants: startingResources.powerPlants
}, 
action) => {
  
  if (action.suppressLog === undefined)
    console.log('handling action:', action)

  switch (action.type) {
    case 'ADD_CREDITS':
      return {...state, 
        resources: {
          ...state.resources, 
          credits: state.resources.credits + action.numCredits}}
    case 'ADD_GAME_TIME':
      return {...state, gameTime: state.gameTime + action.gameTime}
    case 'ADD_FACTORIES':
      const maxNewFactories = Math.floor(state.resources.credits / factoryInfo.cost.credits)
      const newFactories = Math.min(maxNewFactories, action.numFactories)
      return {...state, 
        factories: state.factories + newFactories,
        resources: {
          ...state.resources,
          credits: state.resources.credits - (newFactories * factoryInfo.cost.credits)}        }
    case 'ADD_POWER_PLANTS':
      return {...state, powerPlants: state.powerPlants + action.numPowerPlants}
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

const newCredits = (state, incrementMultiple) => {
  return state.factories * incrementMultiple
}