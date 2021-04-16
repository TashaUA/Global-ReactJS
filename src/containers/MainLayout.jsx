import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sort from "../containers/Sort";
import Filter from "../containers/Filter";
import MoviesList from "../containers/MoviesList";
import AddEditMovieDialog from "./AddEditMovieDialog";
import DeleteMovieDialog from "./DeleteMovieDialog";

export default function MainLayout(props) {

    return (
        <>
            <div className="top-section">
                <Header/>
                {props.children}
            </div>
            <div className="nav-container">
                <Filter/>
                <Sort/>
            </div>
            <MoviesList/>
            <Footer/>
            <AddEditMovieDialog/>
            <DeleteMovieDialog/>
        </>
    );
};
