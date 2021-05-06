import React from "react";
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import path from "path";
import App from "./App";
import { searchMovies, getMovie } from './store/movies/thunk';
import configureStore from './utils/configureStore';
import MoviesList from "./containers/MoviesList";
import MovieExtendedCard from "./components/MovieExtendedCard";
import { ChunkExtractor } from '@loadable/server';

function renderHTML(html, preloadedState) {
    return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          <link href="/main.css" rel="stylesheet" type="text/css">
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

const routes = [
    {
        path: "/search/:query",
        component: MoviesList,
        fetchInitialData: (dispatch, query) => dispatch(searchMovies(query)),
    },
    {
        path: "/film/:id",
        component: MovieExtendedCard,
        fetchInitialData: (dispatch, id) => dispatch(getMovie(id)),
    },
];

export default function serverRenderer() {
    return (req, res) => {

        const store = configureStore();
        // This context object contains the results of the render
        const context = {};

        const renderRoot = () => (
            <App
                context={context}
                location={req.url}
                Router={StaticRouter}
                store={store}
            />
        );

        const activeRoute = routes.find( route => matchPath(req.url, route) ) || {};

        const url = req.url;
        var n = url.lastIndexOf('/');
        var params = url.substring(n + 1);

        const _promise = activeRoute.fetchInitialData
            ? activeRoute.fetchInitialData(store.dispatch, params)
            : Promise.resolve();

        _promise.then(() => {
            const statsFile = path.resolve(__dirname, '../loadable-stats.json');
            const extractor = new ChunkExtractor({ statsFile });
            const jsx = extractor.collectChunks(renderRoot());
            const htmlString = renderToString(jsx);

            if (context.url) {
                res.writeHead(302, {
                    Location: context.url,
                });
                res.end();
                return;
            }

            const preloadedState = store.getState();
            res.send(renderHTML(htmlString, preloadedState));
        });

    };
}

