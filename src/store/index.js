import {applyMiddleware, createStore} from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(reducer, (process.env.NODE_ENV === 'production')
    ? applyMiddleware(thunk)
    : composeWithDevTools(applyMiddleware(thunk)));
