import axios from 'axios';
import types from "./types";

const api = 'http://127.0.0.1:4000/';

export const loadMovies = () => {
    return (dispatch) => {
        dispatch({ type: types.GET_MOVIES });
        return axios.get(`${api}movies?limit=40`)
            .then((result) => result.data)
            .then(res => {
                dispatch({ type: types.SET_MOVIES, payload: res.data})})
            .catch(err => dispatch({ type: types.GET_MOVIES_FAILURE, err })
        );
    };
};

export const addMovie = (data) => {
    return (dispatch) => {
        dispatch({ type: types.ADD_MOVIE });
        return axios.post(`${api}movies`, data)
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
        return axios.put(`${api}movies`, data)
            .then((res) => {
                dispatch(loadMovies());
            })
            .catch(err => dispatch({ type: types.GET_MOVIES_FAILURE, err })
            );
    };
};

export const deleteMovie = (id) => {
    return (dispatch) => {
        dispatch({ type: types.DELETE_MOVIE });
        return axios.delete(`${api}movies/${id}`)
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
        return axios.get(`${api}movies/`, {
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

export const sortMovies = (type) => {
    return (dispatch) => {
        dispatch({ type: types.SORT_MOVIES });
        return axios.get(`${api}movies/`, {
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
