import React from "react";
import PropTypes from "prop-types";
import defaultImg from "../images/coming-soon.png";
import Button from "./Button";
import uiActions from "../store/ui/actions";
import actions from "../store/movies/actions";
import {connect} from "react-redux";

const MovieExtendedCard = (props) => {
    const {poster_path, title, release_date, genres, vote_average, overview, runtime, tagline} = props.entry;

    const openDialog = (type) => {
        props.selectMovie(props.entry);
        props.openDialog(type);
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
                <p className="actions">
                    <Button classModifier="button--grey button--small" onClick={() => openDialog('edit')} title="Edit"/>
                    <Button classModifier="button--grey button--small" onClick={() => openDialog('delete')} title="Delete"/>
                </p>
            </div>
        </div>
    )
};

MovieExtendedCard.propTypes = {
    entry: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
        release_date: PropTypes.string,
        genres: PropTypes.array,
    })
};

const mapDispatchToProps = dispatch => {
    return {
        openDialog: (payload) => { dispatch(uiActions.openDialog(payload)); },
        selectMovie: (payload) => { dispatch(actions.selectMovie(payload)); }
    };
};

export default connect(null, mapDispatchToProps)(MovieExtendedCard);
