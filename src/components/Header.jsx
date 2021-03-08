import React from "react";
import AddEditMovie from "../containers/AddEditMovie";
import img from "../images/logo.png";

export default function Header() {
    return (
        <>
            <a href="#" className="logo"><img src={img} alt="Netflix" /></a>
            <AddEditMovie />
        </>
    );
}