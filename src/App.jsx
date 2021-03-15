import "./styles/app.scss";
import React, {useState, useCallback} from "react";
import Header from "./components/Header";
import SearchBox from "./containers/SearchBox";
import Sort from "./containers/Sort";
import Navigation from "./containers/Navigation";
import MoviesList from "./containers/MoviesList";
import Footer from "./components/Footer";
import ErrorBoundary from "./utils/ErrorBoundary"
import MoviePage from "./containers/MoviePage"
import AddEditMovieDialog from "./containers/AddEditMovieDialog";
import DialogNames from "./utils/constants";
import DeleteMovieDialog from "./containers/DeleteMovieDialog";

export default function App() {
    const [entry, setEntry] = useState({});
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    const handleOpenDialog = useCallback(({entry, type}) => {
        setEntry({...entry});
        (type === DialogNames.EDIT) ? setOpenEdit(true) : setOpenDelete(true);
    }, []);

    const handleClose = useCallback((type) => {
        (type === DialogNames.EDIT) ? setOpenEdit(false) : setOpenDelete(false);
    },[]);

    return (
        <div className="App">
            <div className="top-section">
                <Header />
              {/*  <ErrorBoundary>
                    <SearchBox />
                </ErrorBoundary>*/}
                <MoviePage handleOpenDialog={handleOpenDialog}/>
            </div>
            <div className="nav-container">
                <Navigation />
                <ErrorBoundary>
                    <Sort />
                </ErrorBoundary>
            </div>
            <ErrorBoundary>
                <MoviesList handleOpenDialog={handleOpenDialog}/>
            </ErrorBoundary>
            <Footer/>
            <AddEditMovieDialog entry={entry} openEdit={openEdit} onCloseDialog={() => handleClose(DialogNames.EDIT)}/>
            <DeleteMovieDialog entry={entry} openDelete={openDelete} onCloseDialog={() => handleClose(DialogNames.DELETE)}/>
        </div>
    );
}
