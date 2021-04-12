import React, { useEffect } from "react";
import { connect } from "react-redux";
import {useLocation} from "react-router-dom";
import MovieCard from "../components/MovieCard";
import MoviesAmount from "../components/MoviesAmount";
import {searchMovies, loadMovies} from '../store/movies/thunk';
import selectors from '../store/movies/selectors';

const MoviesList = (props) => {

    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery().get('query');

    useEffect(() => {
        if (query) {
            props.searchMovies(query);
        }
    }, [query]);

    return (
        <>
            <MoviesAmount amount={props.moviesProp.length}/>
            {props.moviesProp.length ? <ul className="movies-list">
                    {props.moviesProp.map((el) => (
                        <MovieCard key={el.id} entry={el}/>
                    ))}
                </ul> : <p className="movies-list--empty">No movie found</p>
            }
        </>
    );
};

function mapStateToProps(state) {
    const movies = selectors.getMovies(state);

    return { moviesProp: movies }
}

const mapDispatchToProps = dispatch => {
    return {
        loadMovies: () => dispatch(loadMovies()),
        searchMovies: (payload) => dispatch(searchMovies(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);