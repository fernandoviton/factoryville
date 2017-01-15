import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import root from './reducers/root';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { startGameTimer} from './middleware/gameTimer'

const store = createStore(root);
console.log('created store', store.getState())
const render = () => ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>, 
  document.getElementById('root'));

store.subscribe(render)

window.onload = function() 
{
  startGameTimer(store)
  render()
}
