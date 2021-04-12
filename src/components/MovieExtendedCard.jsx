import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { useParams } from "react-router-dom";
import defaultImg from "../images/coming-soon.png";
import Button from "./Button";
import uiActions from "../store/ui/actions";
import actions from "../store/movies/actions";
import { getMovie } from "../store/movies/thunk";
import selectors from "../store/movies/selectors";

const MovieExtendedCard = (props) => {

    const { id } = useParams();

    const {poster_path, title, release_date, genres,
        vote_average, overview, runtime, tagline} = props.entry.id ? props.entry : props.selectedMovie;

    const openDialog = (type) => {
        props.selectMovie(props.entry);
        props.openDialog(type);
    };

    useEffect(() => {
        if(!props.entry.id) {
            props.getMovie(id);
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="movie-extended-card">
            <img src={poster_path ? poster_path : defaultImg}/>
            <div className="movie-extended-card__info">
                <p className="movie-extended-card__info-title">{title}
                    <span className="movie-extended-card__info-rating">{vote_average}</span>
                </p>
                <p>{tagline}</p>
                <p className="movie-extended-card__info-date"><span>{release_date && release_date.split('-')[0]}</span> {runtime} min
                </p>
                <p className="movie-extended-card__info-overview">{overview}</p>
                {genres && genres.join(", ")}
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
        id: PropTypes.number,
        title: PropTypes.string,
        poster_path: PropTypes.string,
        release_date: PropTypes.string,
        genres: PropTypes.array,
    })
};

function mapStateToProps(state) {

    return {
        selectedMovie: selectors.getSelectedMovie(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openDialog: (payload) => { dispatch(uiActions.openDialog(payload)); },
        selectMovie: (payload) => { dispatch(actions.selectMovie(payload)); },
        getMovie: (payload) => { dispatch(getMovie(payload)); }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieExtendedCard);
