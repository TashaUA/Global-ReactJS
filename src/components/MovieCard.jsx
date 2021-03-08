import React from "react";
import PropTypes from "prop-types";
import defaultImg from "../images/coming-soon.png";
import AddEditMovie from "../containers/AddEditMovie";
import DeleteMovie from "../containers/DeleteMovie";

export default function MovieCard(props) {
    const { poster_path, title, release_date, genres } = props.entry;
    return (
        <li className="movie-card">
            <img src={poster_path ? poster_path : defaultImg} />
            <p className="movie-card__title">
                <span>{title}</span>
                <span>{release_date.split('-')[0]}</span>
            </p>
            {genres.join(", ")}
            <AddEditMovie entry={props.entry} />
            <DeleteMovie id={props.entry.id} />
        </li>
    )
}

MovieCard.propTypes = {
    entry: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
        release_date: PropTypes.string,
        genres: PropTypes.array,
    })
};
