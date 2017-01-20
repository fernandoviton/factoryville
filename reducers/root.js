import { startingResources, tickInfo, factoryInfo } from '../resources/constants'

export default (state = {
  credits: startingResources.credits, 
  gameTime: 0, 
  factories: startingResources.factories,
  powerPlants: startingResources.powerPlants
}, 
action) => {
  
  if (action.suppressLog === undefined)
    console.log('handling action:', action)

  switch (action.type) {
    case 'ADD_CREDITS':
      return {...state, credits: state.credits + action.numCredits}
    case 'ADD_GAME_TIME':
      return {...state, gameTime: state.gameTime + action.gameTime}
    case 'ADD_FACTORIES':
      const maxNewFactories = Math.floor(state.credits / factoryInfo.cost)
      const newFactories = Math.min(maxNewFactories, action.numFactories)
      return {...state, 
        factories: state.factories + newFactories,
        credits: state.credits - (newFactories * factoryInfo.cost)}
    case 'ADD_POWER_PLANTS':
      return {...state, powerPlants: state.powerPlants + action.numPowerPlants}
    case 'ADVANCE_GAME_TIME':
      return {...state, 
          credits: state.credits + newCredits(state, tickInfo.incrementMultiple),
          gameTime: state.gameTime + tickInfo.incrementMultiple
      }
  }

  return state
}

const newCredits = (state, incrementMultiple) => {
  return state.factories * incrementMultiple
}