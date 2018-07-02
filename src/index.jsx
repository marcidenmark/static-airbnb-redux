import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import  reduxPromise  from 'redux-promise';
import '../assets/stylesheets/application.scss';
import App from './components/app';

import flatsReducer from './reducers/flats_reducer';
import selectedFlatReducer from './reducers/selected_flat_reducer';


const reducers = combineReducers({
	flats: flatsReducer,
	selectedFlat: selectedFlatReducer
	//keys / reducers
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

const root = document.getElementById('root');
ReactDOM.render(
	<Provider store={createStore(reducers, {}, middlewares )}>
		<App />
	</Provider>,
root);
// line 23 {} will be initialized here.


