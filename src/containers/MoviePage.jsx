import React from 'react';
import MovieExtendedCard from "../components/MovieExtendedCard";
import MoviesData from "../components/MoviesData";

export default function MoviePage(props) {
    const entry = MoviesData[8] || {};
    return (
            <MovieExtendedCard key={entry.id} entry={entry} handleOpenDialog={props.handleOpenDialog}/>
    );
}
