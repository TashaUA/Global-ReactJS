import React from "react";
import MovieCard from "../components/MovieCard";
import MoviesAmount from "../components/MoviesAmount";
import MoviesData from "../components/MoviesData";
import AddEditMovieDialog from "./AddEditMovieDialog";
import DeleteMovieDialog from "./DeleteMovieDialog";

class MoviesList extends React.Component {
    state = { entry: '', openEdit: false, openDelete: false };

    handleOpenDialog = ({ entry, type }) => {
        this.setState({ entry });
        (type === 'edit') ? this.setState({openEdit: true}) : this.setState({openDelete: true});
    };

    handleClose = (type) => {
        (type === 'edit') ? this.setState({openEdit: false}) : this.setState({openDelete: false});
    };

    render() {
        return (
            <>
                <MoviesAmount amount={MoviesData.length}/>
                <ul className="movies-list">
                    {MoviesData.slice(0, 6).map((el) => (
                        <MovieCard key={el.id} entry={el} handleOpenDialog={this.handleOpenDialog} />
                    ))}
                </ul>
                <AddEditMovieDialog {...this.state} onCloseDialog={() => this.handleClose('edit')}/>
                <DeleteMovieDialog {...this.state} onCloseDialog={() => this.handleClose('delete')}/>
            </>
        );
    }
}

export default MoviesList;