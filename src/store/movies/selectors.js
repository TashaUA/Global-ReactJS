const getMovies = state => state.movies.data || [];
const getSelectedMovie = state => state.movies.selectedMovie || false;
const getMovie = state => state.movies || false;
const getActiveFilter = state => state.movies.activeFilter || false;

export default {
    getMovies,
    getSelectedMovie,
    getActiveFilter,
}