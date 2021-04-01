import React from 'react';
import MovieExtendedCard from "../components/MovieExtendedCard";
import selectors from "../store/movies/selectors";
import {connect} from "react-redux";

const MoviePage = (props) => {
    const entry = props.moviesProp.find(obj => obj.id === props.selectedMovie) || {};
    return (
            <MovieExtendedCard key={entry.id} entry={entry}/>
    );
};

function mapStateToProps(state) {
    const movies = selectors.getMovies(state);

    return { moviesProp: movies }
}

export default connect(mapStateToProps, null)(MoviePage);