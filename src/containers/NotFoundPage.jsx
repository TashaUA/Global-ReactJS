import React from 'react';
import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import img from "../images/logo.png";

export default function NotFoundPage() {

    return (
        <div className="page-not-found">
            <Link to="/" className="logo"><img src="/images/logo.png" alt="Netflix"/></Link>
            <h1 className="page-not-found__header">Page not found</h1>
            <p className="page-not-found__404">404</p>
            <Link to="/" className="button--grey page-not-found__back-home">Go back home</Link>
            <Footer/>
        </div>
    );
};