import "./styles/app.scss";
import React from "react";
import Header from "./components/Header";
import SearchBox from "./containers/SearchBox";
import Sort from "./containers/Sort";
import Navigation from "./containers/Navigation";
import MoviesList from "./containers/MoviesList";
import Footer from "./components/Footer";
import ErrorBoundary from "./utils/ErrorBoundary"

export default function App() {
    return (
        <div className="App">
            <div className="top-section">
                <Header />
                <ErrorBoundary>
                    <SearchBox />
                </ErrorBoundary>
            </div>
            <div className="nav-container">
                <Navigation />
                <ErrorBoundary>
                    <Sort />
                </ErrorBoundary>
            </div>
            <ErrorBoundary>
                <MoviesList/>
            </ErrorBoundary>
            <Footer/>
        </div>
    );
}
