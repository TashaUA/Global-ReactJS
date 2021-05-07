import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../store/reducer';

export default (initialState) => createStore(rootReducer, initialState, (process.env.NODE_ENV === 'production')
  ? applyMiddleware(thunk)
  : composeWithDevTools(applyMiddleware(thunk)));
