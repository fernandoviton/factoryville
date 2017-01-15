'use babel'

import React from 'react'
import { addFactories } from '../actions/index.js'

export default class Root extends React.Component {
  render() {
    const { store } = this.context;
    const state = store.getState();
    console.log('store on Root render:', state)

    return <div>
      <button onClick={() => store.dispatch(addFactories(1))}>+</button>
      <p>Game Time: {state.gameTime}</p>
      <p>Credits: {state.credits}</p>
      <p>Factories: {state.factories}</p>
      <p>Power Plants: {state.powerPlants}</p>
    </div>
  }
}
Root.contextTypes = {
  store: React.PropTypes.object
}
