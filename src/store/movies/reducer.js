import types from "./types";

const initialState = {
    data: [],
    selectedMovie: false,
    activeFilter: 'All',
};

export default function movies(state = initialState, action) {
    switch (action.type) {
        case types.SET_MOVIES:
            return {...state, data: action.payload };
        case types.SELECT_MOVIE:
            return {...state, selectedMovie: action.payload};
        case types.SET_ACTIVE_FILTER:
            return {...state, activeFilter: action.payload};
        case types.SET_UPDATED_MOVIE:
            return {...state, data: state.data.map(
                        movie => movie.id === action.payload.id ? action.payload : movie)};
        default:
            return state;
    }
}