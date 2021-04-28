import "./styles/app.scss";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./utils/ErrorBoundary"
import Routes from "./utils/Routes";
import { hot } from "react-hot-loader";

const App = ({Router, location, context, store}) => {

    return (
        <Provider store={store}>
            <Router location={location} context={context}>
            <ErrorBoundary>
                <div className="App">
                        <Routes/>
                </div>
            </ErrorBoundary>
            </Router>
        </Provider>
    );
};

export default hot(module)(App);