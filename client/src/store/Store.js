import { configureStore, applyMiddleware , compose } from '@reduxjs/toolkit';
import reducer from '../reducers/reducer.js';
import {thunk} from 'redux-thunk';
const preloadedState = {};

const enhancer = window.__REDUX_DEVTOOLS_EXTINCTION_COMPOSE__ || compose;

const store = configureStore({
    reducer: reducer,
    preloadedState: preloadedState, 
    enhancer: enhancer(applyMiddleware(thunk)),
});

export default store;