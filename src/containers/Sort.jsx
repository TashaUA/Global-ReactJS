import React from "react";

class Sort extends React.Component {
    render() {
        return (
            <div className="sort">
                <p className="sort__title">Sort by</p>
                <div tabindex="0" class="sort__menu">
                    Release Date
                    <div class="sort__menu-dropdown">
                        <a href="#">Title</a>
                        <a href="#">Genres</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sort;