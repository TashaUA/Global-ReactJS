import React from "react";
import PropTypes from "prop-types";
import defaultImg from "../images/coming-soon.png";
import Button from "./Button";

export default function MovieCard(props) {
    const { poster_path, title, release_date, genres, id } = props.entry;

    const openDialog = (type) => {
        const { entry, handleOpenDialog } = props;
        handleOpenDialog({ entry, type });
    };

    const onClick = (id) => {
        const { onClick } = props;
        onClick(id);
    };

    return (
        <li className="movie-card" onClick={() => onClick(id)}>
            <img src={poster_path ? poster_path : defaultImg} />
            <p className="movie-card__title">
                <span>{title}</span>
                <span>{release_date.split('-')[0]}</span>
            </p>
            {genres.join(", ")}
            <p className="actions">
                <Button classModifier="button--grey button--small" onClick={() => openDialog('edit')} title="Edit"/>
                <Button classModifier="button--grey button--small" onClick={() => openDialog('delete')} title="Delete"/>
            </p>
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
