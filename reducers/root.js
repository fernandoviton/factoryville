import { startingResources } from '../resources/constants'

export default (state = {numbers:[1,1], credits: startingResources.credits}, action) => {
  
  console.log('handling action:', action)

  switch (action.type)
  {
    case 'ADD_CREDITS':
      return {credits: state.credits + action.numCredits}
  }

  return state
}