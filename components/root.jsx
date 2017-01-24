'use babel'

import React from 'react'
import { addFactories, addPowerPlants } from '../actions/index.js'
import { factoryInfo, powerPlantInfo } from '../resources/constants'

export default class Root extends React.Component {
  render() {
    const { store } = this.context;
    const state = store.getState();
    console.log('store on Root render:', state)

    return <div>
      <p>Game Time: {state.gameTime}</p>
      <p>Credits: {state.resources.credits}</p>
      <p>Factories: {state.factories}
        <button onClick={() => store.dispatch(addFactories(1))}>create (-{factoryInfo.cost.credits} credits)</button>
      </p>
      <p>Power Plants: {state.powerPlants}
        <button onClick={() => store.dispatch(addPowerPlants(1))}>create (-{powerPlantInfo.cost.credits} credits)</button>
      </p>
    </div>
  }
}
Root.contextTypes = {
  store: React.PropTypes.object
}
