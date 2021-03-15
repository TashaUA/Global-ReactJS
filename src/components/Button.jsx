import React from "react";

export default function Button(props) {
    return (
        <>
            <a href="#" className={ `button ${props.classModifier}` }
               onClick={() => props.onClick(props.type)}>{props.title}</a>
        </>
    );
}