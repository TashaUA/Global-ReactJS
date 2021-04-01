import { createAction } from 'redux-actions';

import types from "./types";

const getMovies = createAction(types.GET_MOVIES);
const addMovie = createAction(types.ADD_MOVIE);
const updateMovie = createAction(types.UPDATE_MOVIE);
const deleteMovie = createAction(types.DELETE_MOVIE);
const filterMovies = createAction(types.FILTER_MOVIES);
const sortMovies = createAction(types.SORT_MOVIES);
const selectMovie = createAction(types.SELECT_MOVIE);
const setActiveFilter = createAction(types.SET_ACTIVE_FILTER);

export default {
    getMovies,
    addMovie,
    updateMovie,
    deleteMovie,
    filterMovies,
    sortMovies,
    selectMovie,
    setActiveFilter,
};