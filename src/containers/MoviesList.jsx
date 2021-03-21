import React from "react";
import MovieCard from "../components/MovieCard";
import MoviesAmount from "../components/MoviesAmount";
import MoviesData from "../components/MoviesData";

export default function MoviesList(props) {
    return (
        <>
            <MoviesAmount amount={MoviesData.length}/>
            <ul className="movies-list">
                {MoviesData.slice(0, 6).map((el) => (
                    <MovieCard key={el.id} entry={el} onClick={props.onClick} handleOpenDialog={props.handleOpenDialog}/>
                ))}
            </ul>
        </>
    );
}