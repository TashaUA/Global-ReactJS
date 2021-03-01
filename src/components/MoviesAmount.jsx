import React from "react";
import PropTypes from "prop-types";

export default function MoviesAmount({amount}) {
    return (
        <p className="movies-amount">
            <span>{amount}</span> movies found
        </p>
    )
}
