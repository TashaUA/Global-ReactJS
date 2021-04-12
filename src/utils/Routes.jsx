import React from "react";
import {Switch, Route} from "react-router-dom";
import NotFoundPage from "../containers/NotFoundPage";
import SearchPage from "../containers/SearchPage";
import MoviePage from "../containers/MoviePage";

export default function Routes() {
    return (
        <Switch>
            <Route path="/film/:id">
                <MoviePage/>
            </Route>
            <Route exact path="/">
                <SearchPage/>
            </Route>
            <Route path="/search">
                <SearchPage/>
            </Route>
            <Route path="*">
                <NotFoundPage/>
            </Route>
        </Switch>
    );
};