export default (state = {numbers:[1,1]}, action) => {
  
  console.log('handling action:', action)

  switch (action.type)
  {
    case 'ADD_TO_SEQUENCE':
      const length = state.numbers.length;
      const nextNumber = state.numbers[length-1] + state.numbers[length-2]
      const newState = {numbers: [...state.numbers, nextNumber]}
      return newState
  }

  return state
}