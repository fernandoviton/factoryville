export default store => next => action => {
	if (action.suppressLog !== true) {
		console.log('dispatching', action)
	}
  const result = next(action)
	if (action.suppressLog !== true) {
  	console.log('next state', store.getState())
	}
	return result
}