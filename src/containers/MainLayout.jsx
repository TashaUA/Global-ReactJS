import React from 'react';
import loadable from '@loadable/component'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sort from "../containers/Sort";
import Filter from "../containers/Filter";
const MoviesList = loadable(() => import(/* webpackChunkName: "MoviesList", webpackPreload: true */ '../containers/MoviesList'));
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
            <MoviesList fallback={<div>Loading...</div>}/>
            <Footer/>
            <AddEditMovieDialog/>
            <DeleteMovieDialog/>
        </>
    );
};
