import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import helloReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';
import "typeface-roboto";

let store = createStore(helloReducer) 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
	document.getElementById('root')
);
registerServiceWorker();
