import React from "react";

export default function Sort() {
    return (
        <div className="sort">
            <p className="sort__title">Sort by</p>
            <div tabIndex="0" className="sort__menu">
                Release Date
                <div className="sort__menu-dropdown">
                    <a href="#">Title</a>
                    <a href="#">Genres</a>
                </div>
            </div>
        </div>
    );
}