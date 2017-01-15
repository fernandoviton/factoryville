import { startingResources, tickInfo } from '../resources/constants'

export default (state = {
  credits: startingResources.credits, 
  gameTime: 0, 
  factories: startingResources.factories
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
      return {...state, factories: state.factories + action.numFactories}
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