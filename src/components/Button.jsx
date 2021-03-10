import React from "react";

class Button extends React.Component {
    render() {
        return (
            <>
                <a href="#" className="add-movie-button"
                   onClick={() => this.props.onClick(this.props.type)}>{this.props.title}</a>
            </>
        );
    }
}

export default Button
