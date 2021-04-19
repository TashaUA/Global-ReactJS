const DialogNames = {
    EDIT: 'edit',
    DELETE: 'delete',
};

const Genres = {
    All: 'All',
    Action: 'Action',
    Adventure: 'Adventure',
    Comedy: 'Comedy',
    Crime: 'Crime',
    Drama: 'Drama',
};

const SortBy = {
    release_date: 'Release Date',
    vote_average: 'Rating',
};

const  initialMovieState = {
    id: 0,
    title: '',
    poster_path: '',
    release_date: '',
    genres: [],
    overview: '',
    runtime: 0,
};

export default {
    DialogNames,
    Genres,
    SortBy,
    initialMovieState,
};