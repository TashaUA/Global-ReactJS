import reducer from '../../../store/movies/reducer'
import types from '../../../store/movies/types'
import constants from "../../../utils/constants";

describe('movies reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                data: [],
                selectedMovie: constants.initialMovieState,
                activeFilter: 'All',
            }
        )
    });

    it('should handle SET_MOVIES', () => {
        expect(
            reducer([], {
                type: types.SET_MOVIES,
                payload: [{id: 123}]
            })
        ).toEqual({
                data: [{id: 123}]
            }
        );

        expect(
            reducer({ data: [{id: 123}] }, {
                    type: types.SET_MOVIES,
                    payload: [{id: 123}, {id: 222}],
                })
        ).toEqual({
                data: [{id: 123}, {id: 222}],
            })
    });

    it('should handle SELECT_MOVIE', () => {
        expect(
            reducer([], {
                type: types.SELECT_MOVIE,
                payload: false
            })
        ).toEqual({
                selectedMovie: constants.initialMovieState
            }
        );

        expect(
            reducer({ selectedMovie: {id: 123} }, {
                type: types.SELECT_MOVIE,
                payload: {id: 333},
            })
        ).toEqual({
            selectedMovie: {id: 333},
        })
    });

    it('should handle SET_ACTIVE_FILTER', () => {
        expect(
            reducer({ activeFilter: '' }, {
                type: types.SET_ACTIVE_FILTER,
                payload: 'Comedy',
            })
        ).toEqual({
            activeFilter: 'Comedy',
        })
    });

    it('should handle SET_UPDATED_MOVIE', () => {
        expect(
            reducer({ data: [{id: 123, title: 'text'}, {id: 222, title: 'text1'}] }, {
                type: types.SET_UPDATED_MOVIE,
                payload: { id: 222, title: 'text2'}
            })
        ).toEqual({
                data: [{id: 123, title: 'text'}, {id: 222, title: 'text2'}],
            }
        );

        expect(
            reducer({ data: [{id: 123, title: 'text'}, {id: 222, title: 'text1'}] }, {
                type: types.SET_UPDATED_MOVIE,
                payload: { id: 333, title: 'text2'}
            })
        ).toEqual({
                data: [{id: 123, title: 'text'}, {id: 222, title: 'text1'}],
            }
        );
    });
});