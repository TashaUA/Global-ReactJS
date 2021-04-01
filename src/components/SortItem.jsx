import React from "react";
import {sortMovies} from "../store/movies/thunk";
import {connect} from "react-redux";

const SortItem = (props) => {

    const handleSortMovies = (e, type) => {
        e.preventDefault();
        props.sortMovies(type);
        props.selectSortTitle(props.name);
    };

    return (
        <a href="#" onClick={(e) => handleSortMovies(e, props.id)} key={props.id}>
            {props.name}
        </a>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        sortMovies: (payload) => { dispatch(sortMovies(payload)); }
    };
};

export default connect(null, mapDispatchToProps)(SortItem);