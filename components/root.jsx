'use babel'

import React from 'react'
import { addCredits } from '../actions/index.js'

export default class Root extends React.Component {
  render() {
    const { store } = this.context;
    console.log('store on Root render:', store.getState())
        var key = 0;

    return <div>
      <button onClick={() => store.dispatch(addCredits(1))}>+</button>
      <p>{store.getState().credits}</p>
    </div>
  }
}
Root.contextTypes = {
  store: React.PropTypes.object
}
