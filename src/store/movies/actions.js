import { createAction } from 'redux-actions';

import types from "./types";

const getMovies = createAction(types.GET_MOVIES);
const getMovie = createAction(types.GET_MOVIE);
const addMovie = createAction(types.ADD_MOVIE);
const updateMovie = createAction(types.UPDATE_MOVIE);
const deleteMovie = createAction(types.DELETE_MOVIE);
const filterMovies = createAction(types.FILTER_MOVIES);
const searchMovies = createAction(types.SEARCH_MOVIES);
const sortMovies = createAction(types.SORT_MOVIES);
const selectMovie = createAction(types.SELECT_MOVIE);
const setActiveFilter = createAction(types.SET_ACTIVE_FILTER);

export default {
    getMovies,
    getMovie,
    addMovie,
    updateMovie,
    deleteMovie,
    filterMovies,
    searchMovies,
    sortMovies,
    selectMovie,
    setActiveFilter,
};