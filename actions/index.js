export const addCredits = (numCredits) => ({
	type: 'ADD_CREDITS',
	numCredits
})

export const addGameTime = (gameTime) => ({
	type: 'ADD_GAME_TIME',
	gameTime
})

export const addFactories = (numFactories) => ({
	type: 'ADD_FACTORIES',
	numFactories
})

export const addPowerPlants = (numPowerPlants) => ({
	type: 'ADD_POWER_PLANTS',
	numPowerPlants
})

export const advanceGameTime = () => ({
	type: 'ADVANCE_GAME_TIME',
	suppressLog: true
})
