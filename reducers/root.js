import { startingResources } from '../resources/constants'

export default (state = {credits: startingResources.credits, gameTime: 0, numFactories: startingResources.factories}, action) => {
  
  console.log('handling action:', action)

  switch (action.type) {
    case 'ADD_CREDITS':
      return {...state, credits: state.credits + action.numCredits}
    case 'ADD_GAME_TIME':
      return {...state, gameTime: state.gameTime + action.gameTime}
    case 'ADD_FACTORIES':
      return {...state, factories: state.factories + action.numFactories}
  }

  return state
}