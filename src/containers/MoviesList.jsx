import React, { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import MoviesAmount from "../components/MoviesAmount";
import { connect } from "react-redux";
import { loadMovies } from '../store/movies/thunk';
import selectors from '../store/movies/selectors';

const MoviesList = (props) => {

    useEffect(() => {
        props.loadMovies();
    }, []);

    return (
        <>
            <MoviesAmount amount={props.moviesProp.length}/>
            <ul className="movies-list">
                {props.moviesProp.map((el) => (
                    <MovieCard key={el.id} entry={el} onClick={props.onClick} handleOpenDialog={props.handleOpenDialog}/>
                ))}
            </ul>
        </>
    );
};

function mapStateToProps(state) {
    const movies = selectors.getMovies(state);

    return { moviesProp: movies }
}

const mapDispatchToProps = dispatch => {
    return {
        loadMovies: () => {
            dispatch(loadMovies());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);