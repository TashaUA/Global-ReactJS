import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../store/reducer';
import thunk from "redux-thunk";

export default (initialState) => {
    //const store =
    return createStore(rootReducer, initialState, applyMiddleware(thunk));

   /* sagaMiddleware.run(rootSaga);
    store.runSaga = () => sagaMiddleware.run(rootSaga);
    store.close = () => store.dispatch(END);*/

    //return store;
};
