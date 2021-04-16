import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import defaultImg from "../images/coming-soon.png";
import Button from "./Button";
import uiActions from "../store/ui/actions";
import actions from "../store/movies/actions";

const MovieCard = (props) => {
    const { poster_path, title, release_date, genres, id } = props.entry;

    const openDialog = (type) => {
        props.selectMovie(props.entry);
        props.openDialog(type);
    };

    return (
        <li className="movie-card">
            <Link to={"/film/" + id}><img src={poster_path ? poster_path : defaultImg} /></Link>
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
};

MovieCard.propTypes = {
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

export default connect(null, mapDispatchToProps)(MovieCard);