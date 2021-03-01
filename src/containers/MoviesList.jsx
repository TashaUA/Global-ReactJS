import React from "react";
import MovieCard from "../components/MovieCard";
import MoviesAmount from "../components/MoviesAmount";
import MoviesData from "../components/MoviesData";

class MoviesList extends React.Component {
    render() {
        return (
            <>
                <MoviesAmount amount={MoviesData.length}/>
                <ul className="movies-list">
                    {MoviesData.slice(0, 6).map((el) => (
                        <MovieCard key={el.id} entry={el} />
                    ))}
                </ul>
            </>
        );
    }
}

export default MoviesList;