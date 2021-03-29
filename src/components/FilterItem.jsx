import React, {useState} from "react";
import PropTypes from "prop-types";
import {filterMovies} from "../store/movies/thunk";
import {connect} from "react-redux";
import selectors from "../store/movies/selectors";
import actions from "../store/movies/actions";

const FilterItem = (props) => {

    const handleFilterMovies = (e, genre) => {
        e.preventDefault();
        props.setActiveFilter(props.id);
        if (genre === 'All')
            genre = '';
        props.filterMovies(genre);
    };

    return (
        <a href="#" className={props.activeFilter === props.id ? 'nav-item nav-item--active' : 'nav-item'} onClick={(e) => handleFilterMovies(e, props.id)} key={props.id}>
            {props.name}
        </a>
    );
};

FilterItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
    return {
        activeFilter: selectors.getActiveFilter(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        filterMovies: (payload) => dispatch(filterMovies(payload)),
        setActiveFilter: (payload) => dispatch(actions.setActiveFilter(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem);