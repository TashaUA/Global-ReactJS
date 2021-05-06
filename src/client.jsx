import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component'

import App from "./App";
import configureStore from './utils/configureStore';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const store = configureStore(preloadedState);

const app = (
    <App
        Router={BrowserRouter}
        store={store}
    />
);

loadableReady(() => {
    const renderMethod = module.hot ? render : ReactDOM.hydrate;
    renderMethod(app, document.getElementById('root'));
});
