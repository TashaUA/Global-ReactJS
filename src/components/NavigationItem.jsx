import React from "react";
import PropTypes from "prop-types";

export default function NavigationItem(props) {
    return (
        <a href="#" className="nav-item" key={props.id}>
            {props.name}
        </a>
    );
}

NavigationItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
};
