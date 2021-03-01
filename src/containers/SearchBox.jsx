import React from "react";

class SearchBox extends React.Component {
    render() {
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
}

export default SearchBox;