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
import DeleteMovieDialog from "./containers/DeleteMovieDialog";
import { Provider } from "react-redux";
import { store } from "store/index.js"

export default function App() {
    const [selectedMovie, setSelectedMovie] = useState(0);

    const onCLick = useCallback((id) => {
        setSelectedMovie(id);
        window.scrollTo(0, 0);
    });

    return (
        <Provider store={store}>
            <ErrorBoundary>
                <div className="App">
                    <div className="top-section">
                        <Header/>
                        {selectedMovie ?
                            <MoviePage selectedMovie={selectedMovie}/>
                            :
                            <SearchBox/>
                        }
                    </div>
                    <div className="nav-container">
                        <Filter/>
                        <Sort/>
                    </div>
                    <MoviesList onClick={onCLick}/>
                    <Footer/>
                    <AddEditMovieDialog/>
                    <DeleteMovieDialog/>
                </div>
            </ErrorBoundary>
        </Provider>
    );
}
