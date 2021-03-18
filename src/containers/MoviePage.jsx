import React from 'react';
import MovieExtendedCard from "../components/MovieExtendedCard";
import MoviesData from "../components/MoviesData";

export default function MoviePage(props) {
    const entry = MoviesData.find(obj => obj.id === props.selectedMovie) || {};
    return (
            <MovieExtendedCard key={entry.id} entry={entry} handleOpenDialog={props.handleOpenDialog}/>
    );
}
