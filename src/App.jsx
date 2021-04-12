import "./styles/app.scss";
import React, {useState, useCallback} from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./utils/ErrorBoundary"
import { store } from "store/index.js"
import Routes from "./utils/Routes";

export default function App() {

    return (
        <Provider store={store}>
            <Router history="">
            <ErrorBoundary>
                <div className="App">
                        <Routes/>
                </div>
            </ErrorBoundary>
            </Router>
        </Provider>
    );
}
