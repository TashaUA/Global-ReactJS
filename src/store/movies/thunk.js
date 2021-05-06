import types from "./types";
import { api } from '../api';
import { redux } from 'react-redux';

export const loadMovies = () => {
    return (dispatch) => {
        dispatch({ type: types.GET_MOVIES });
        return api.get('/movies?limit=40')
            .then((result) => result.data)
            .then(res => {
                dispatch({ type: types.SET_MOVIES, payload: res.data})})
            .catch(err => dispatch({ type: types.GET_MOVIES_FAILURE, err })
        );
    };
};

export const getMovie = (id) => {
    return (dispatch) => {
        dispatch({ type: types.GET_MOVIE });
        return api.get(`/movies/${id}`)
            .then(res => {
                dispatch({ type: types.SELECT_MOVIE, payload: res.data})})
            .catch(err => dispatch({ type: types.GET_MOVIES_FAILURE, err })
            );
    };
};

export const addMovie = (data) => {
    return (dispatch) => {
        dispatch({ type: types.ADD_MOVIE });
        return api.post(`/movies`, data)
            .then((res) => {
                dispatch(loadMovies());
            })
            .catch(err => dispatch({ type: types.GET_MOVIES_FAILURE, err })
            );
    };
};

export const updateMovie = (data) => {
    return (dispatch) => {
        dispatch({ type: types.UPDATE_MOVIE });
        return api.put(`/movies`, data)
            .then((result) => result.data)
            .then((res) => {
                dispatch({ type: types.SET_UPDATED_MOVIE, payload: res})
            })
            .catch(err => dispatch({ type: types.GET_MOVIES_FAILURE, err })
            );
    };
};

export const deleteMovie = (id) => {
    return (dispatch) => {
        dispatch({ type: types.DELETE_MOVIE });
        return api.delete(`/movies/${id}`)
            .then((res) => {
                dispatch(loadMovies());
            })
            .catch(err => dispatch({ type: types.GET_MOVIES_FAILURE, err })
            );
    };
};

export const filterMovies = (genre) => {
    return (dispatch) => {
        dispatch({ type: types.FILTER_MOVIES });
        return api.get('/movies/', {
            params: {
                filter: genre,
                limit: 40,
            }
        })
            .then((result) => result.data)
            .then(res => {
                dispatch({ type: types.SET_MOVIES, payload: res.data})})
            .catch(err => dispatch({ type: types.GET_MOVIES_FAILURE, err })
            );
    };
};

export const searchMovies = (query) => {
    return (dispatch) => {
        dispatch({ type: types.SEARCH_MOVIES });
        return api.get(`/movies?search=${query}&searchBy=title&limit=40`)
            .then((result) => result.data)
            .then(res => {
                dispatch({ type: types.SET_MOVIES, payload: res.data})})
            .catch(err => dispatch({ type: types.GET_MOVIES_FAILURE, err })
            );
    };
};

export const sortMovies = (type) => {
    return (dispatch) => {
        dispatch({ type: types.SORT_MOVIES });
        return api.get(`/movies/`, {
            params: {
                sortBy: type,
                sortOrder: 'desc',
                limit: 40,
            }
        })
            .then((result) => result.data)
            .then(res => {
                dispatch({ type: types.SET_MOVIES, payload: res.data})})
            .catch(err => dispatch({ type: types.GET_MOVIES_FAILURE, err })
            );
    };
};
