import React from "react";
import FilterItem from "../components/FilterItem";
import constants from "../utils/constants";

export default function Filter() {
    return (
        <nav className="nav">
            {Object.entries(constants.Genres).map(([k, v]) => (
                <FilterItem key={k} id={k} name={v}/>
            ))}
        </nav>
    );
}
