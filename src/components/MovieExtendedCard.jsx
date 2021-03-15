import React from "react";
import PropTypes from "prop-types";
import defaultImg from "../images/coming-soon.png";
import Button from "./Button";

export default function MovieExtendedCard(props) {
    const {poster_path, title, release_date, genres, vote_average, overview, runtime, tagline} = props.entry;

    const openDialog = (type) => {
        const {entry = {}, handleOpenDialog} = props;
        handleOpenDialog({entry, type});
    };

    return (
        <div className="movie-extended-card">
            <img src={poster_path ? poster_path : defaultImg}/>
            <div className="movie-extended-card__info">
                <p className="movie-extended-card__info-title">{title}
                    <span className="movie-extended-card__info-rating">{vote_average}</span>
                </p>
                <p>{tagline}</p>
                <p className="movie-extended-card__info-date"><span>{release_date.split('-')[0]}</span> {runtime} min
                </p>
                <p className="movie-extended-card__info-overview">{overview}</p>
                {genres.join(", ")}
                <p class="actions">
                    <Button classModifier="button--grey button--small" onClick={() => openDialog('edit')} title="Edit"/>
                    <Button classModifier="button--grey button--small" onClick={() => openDialog('delete')} title="Delete"/>
                </p>
            </div>
        </div>
    )
}

MovieExtendedCard.propTypes = {
    entry: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
        release_date: PropTypes.string,
        genres: PropTypes.array,
    })
};
