import React from "react";

export default function SearchBox() {
    return (
        <div className="search-box">
            <h3 className="search-box__title">Find your movie</h3>
            <form>
                <input type="text" placeholder="What do you want to watch?"/>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}
