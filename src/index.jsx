import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import '../assets/stylesheets/application.scss';
import App from './components/app';

import flatsReducer from './reducers/flats_reducer';
import selectedFlatReducer from './reducers/selected_flat_reducer';


const reducers = combineReducers({
	flats: flatsReducer,
	selectedFlat: selectedFlatReducer
	//keys / reducers
});
const middlewares = applyMiddleware(logger);

const root = document.getElementById('root');
ReactDOM.render(
	<Provider store={createStore(reducers, {}, middlewares)}>
		<App />
	</Provider>,
root);



