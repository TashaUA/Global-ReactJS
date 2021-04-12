import React from 'react';
import {connect} from "react-redux";
import { useParams } from "react-router-dom";
import MovieExtendedCard from "../components/MovieExtendedCard";
import selectors from "../store/movies/selectors";
import MainLayout from "./MainLayout";

const MoviePage = (props) => {
    let { id } = useParams();

    const entry = props.moviesProp.find(obj => obj.id === Number(id)) || {};
    return (
        <MainLayout>
            <MovieExtendedCard key={entry.id} entry={entry}/>
        </MainLayout>
    );
};

function mapStateToProps(state) {
    const movies = selectors.getMovies(state);

    return { moviesProp: movies }
}

export default connect(mapStateToProps, null)(MoviePage);