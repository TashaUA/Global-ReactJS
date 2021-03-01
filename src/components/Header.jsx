import React from "react";
import img from "../images/logo.png";

export default function Header() {
    return (
        <>
            <a href="#" className="logo"><img src={img} alt="Netflix" /></a>
            <a href="#" className="add-movie-button"> + Add movie</a>
        </>
    );
}