import "./styles/app.scss";
import React, {useState, useCallback} from "react";
import Header from "./components/Header";
import SearchBox from "./containers/SearchBox";
import Sort from "./containers/Sort";
import Filter from "./containers/Filter";
import MoviesList from "./containers/MoviesList";
import Footer from "./components/Footer";
import ErrorBoundary from "./utils/ErrorBoundary"
import MoviePage from "./containers/MoviePage"
import AddEditMovieDialog from "./containers/AddEditMovieDialog";
import DialogNames from "./utils/constants";
import DeleteMovieDialog from "./containers/DeleteMovieDialog";
import {createStore, applyMiddleware} from "redux";
import { Provider } from "react-redux";
import reducer from "store/reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, (process.env.NODE_ENV === 'production')
    ? applyMiddleware(thunk)
    : composeWithDevTools(applyMiddleware(thunk)));


export default function App() {
    const [selectedMovie, setSelectedMovie] = useState(0);

    const onCLick = useCallback((id) => {
        setSelectedMovie(id);
        window.scrollTo(0, 0);
    });

    return (
        <div className="App">
            <Provider store={store}>
            <div className="top-section">
                <Header />
                {selectedMovie ?
                    <MoviePage selectedMovie={selectedMovie} />
                    :
                    <ErrorBoundary>
                        <SearchBox/>
                    </ErrorBoundary>
                }
            </div>
            <div className="nav-container">
                <Filter />
                <ErrorBoundary>
                    <Sort />
                </ErrorBoundary>
            </div>
            <ErrorBoundary>
                <MoviesList onClick={onCLick} />
            </ErrorBoundary>
            <Footer/>
            <AddEditMovieDialog />
            <DeleteMovieDialog />
            </Provider>
        </div>
    );
}
