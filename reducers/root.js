import { startingResources } from '../resources/constants'

export default (state = {credits: startingResources.credits, gameTime: 0}, action) => {
  
  console.log('handling action:', action)

  switch (action.type) {
    case 'ADD_CREDITS':
      return {...state, credits: state.credits + action.numCredits}
    case 'ADD_GAME_TIME':
      return {...state, gameTime: state.gameTime + action.gameTime}
  }

  return state
}