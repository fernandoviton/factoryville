'use babel'

import React from 'react'
import { addCredits } from '../actions/index.js'

export default class Root extends React.Component {
  render() {
    const { store } = this.context;
    const state = store.getState();
    console.log('store on Root render:', state)
        var key = 0;

    return <div>
      <button onClick={() => store.dispatch(addCredits(1))}>+</button>
      <p>Game Time: {state.gameTime}</p>
      <p>Credits: {state.credits}</p>
      <p>Factories: {state.numFactories}</p>
      <p>Power Plants: {state.numPowerPlants}</p>
    </div>
  }
}
Root.contextTypes = {
  store: React.PropTypes.object
}
