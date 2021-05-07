import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import types from '../../../store/movies/types';
import api from '../../../store/api';
import {
  loadMovies, getMovie, addMovie, updateMovie, deleteMovie, filterMovies, sortMovies, searchMovies,
} from '../../../store/movies/thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  let mockAxios;

  beforeEach(() => {
    mockAxios = new MockAdapter(api);
  });

  afterEach(() => {
    mockAxios.restore();
  });

  it('dispatches GET_MOVIES actions and in success creates SET_MOVIES', () => {
    // simulating a server response
    const response = [{ id: 123 }, { id: 222 }];
    mockAxios.onGet('http://127.0.0.1:4000/movies?limit=40').reply(200, { data: response });

    const expectedActions = [
      { type: types.GET_MOVIES },
      { type: types.SET_MOVIES, payload: response },
    ];
    const store = mockStore({ movies: { data: [] } });

    return store.dispatch(loadMovies()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches GET_MOVIE and on success creates SELECT_MOVIE', () => {
    // simulating a server response
    const movieId = '123';
    const response = { id: 123, title: 'test text' };
    mockAxios.onGet(`http://127.0.0.1:4000/movies/${movieId}`).reply(200, response);

    const expectedActions = [
      { type: types.GET_MOVIE },
      { type: types.SELECT_MOVIE, payload: response },
    ];
    const store = mockStore({ movies: { data: [] } });

    return store.dispatch(getMovie(movieId)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches ADD_MOVIE and creates GET_MOVIES in success', () => {
    // simulating a server response
    const data = { id: 123, title: 'test text' };
    mockAxios.onPost('http://127.0.0.1:4000/movies', data).reply(201);

    const expectedActions = [
      { type: types.ADD_MOVIE },
      { type: types.GET_MOVIES },
    ];
    const store = mockStore({ movies: { data: [] } });

    return store.dispatch(addMovie(data)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches UPDATE_MOVIE and creates SET_UPDATED_MOVIE in success', () => {
    // simulating a server response
    const data = { id: 123, title: 'test text' };
    const payload = { id: 123, title: 'test text' };
    mockAxios.onPut('http://127.0.0.1:4000/movies', data).reply(200, payload);

    const expectedActions = [
      { type: types.UPDATE_MOVIE },
      { type: types.SET_UPDATED_MOVIE, payload },
    ];
    const store = mockStore({ movies: { data: [] } });

    return store.dispatch(updateMovie(data)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches DELETE_MOVIE and creates GET_MOVIES after has been done', () => {
    // simulating a server response
    const movieId = '123';
    mockAxios.onDelete(`http://127.0.0.1:4000/movies/${movieId}`).reply(204);

    const expectedActions = [
      { type: types.DELETE_MOVIE },
      { type: types.GET_MOVIES },
    ];
    const store = mockStore({ movies: { data: [] } });

    return store.dispatch(deleteMovie(movieId)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches FILTER_MOVIES and creates SET_MOVIES when success', () => {
    // simulating a server response
    const genre = 'Comedy';
    const response = [{ id: 123 }, { id: 222 }];
    mockAxios.onGet('http://127.0.0.1:4000/movies/', {
      params: {
        filter: genre,
        limit: 40,
      },
    }).reply(200, { data: response });

    const expectedActions = [
      { type: types.FILTER_MOVIES },
      { type: types.SET_MOVIES, payload: response },
    ];
    const store = mockStore({ movies: { data: [] } });

    return store.dispatch(filterMovies(genre)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches SORT_MOVIES and creates SET_MOVIES when sort movies has been done', () => {
    // simulating a server response
    const type = 'release_date';
    const response = [{ id: 123 }, { id: 222 }];
    mockAxios.onGet('http://127.0.0.1:4000/movies/', {
      params: {
        sortBy: type,
        sortOrder: 'desc',
        limit: 40,
      },
    }).reply(200, { data: response });

    const expectedActions = [
      { type: types.SORT_MOVIES },
      { type: types.SET_MOVIES, payload: response },
    ];
    const store = mockStore({ movies: { data: [] } });

    return store.dispatch(sortMovies(type)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches SEARCH_MOVIES and creates SET_MOVIES when search movies has been done', () => {
    // simulating a server response
    const query = 'black';
    const response = [{ id: 123, title: 'Black house' }, { id: 222, title: 'Men in black' }];
    mockAxios.onGet(`http://127.0.0.1:4000/movies?search=${query}&searchBy=title&limit=40`).reply(200, { data: response });

    const expectedActions = [
      { type: types.SEARCH_MOVIES },
      { type: types.SET_MOVIES, payload: response },
    ];
    const store = mockStore({ movies: { data: [] } });

    return store.dispatch(searchMovies(query)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
