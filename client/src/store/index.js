import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'; // Middleware para acciones asíncronas
import rootReducer from './reducer';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
