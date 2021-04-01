import React, { useState, useEffect } from 'react';
import Dialog from "../components/Dialog";
import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";
import constants from "../utils/constants";
import selectors from '../store/movies/selectors';
import uiSelectors from '../store/ui/selectors';
import {addMovie, updateMovie} from "../store/movies/thunk";
import uiActions from "../store/ui/actions";
import {connect} from "react-redux";
import actions from "../store/movies/actions";

const AddEditMovie = (props) => {

    const  initialState = {
        id: 0,
        title: '',
        poster_path: '',
        release_date: '',
        genres: [],
        overview: '',
        runtime: 0,
    };

    const [isEdit, setIsEdit] = useState(!!props.selectedMovie);
    const [movie, setMovie] = useState(initialState);

    useEffect(() => {
        const newMovie = props.selectedMovie || initialState;
        setMovie({...movie, ...newMovie});
        setIsEdit(!!props.selectedMovie);
    }, [props.selectedMovie]);

    const onSubmit = () => {
        isEdit
            ? props.updateMovie(movie)
            : addMovie(movie);
        props.selectMovie(false);
        props.closeDialog(constants.DialogNames.EDIT);
    };

    const addMovie = (movie) => {
        const { id, ...rest } = movie;
        props.addMovie(rest);
    };


    const handleInput = (event) => {
        let {value, name, type} = event.target;
        (type === 'number') ? value = Number(value) : '';

        setMovie({
            ...movie,
            [name]: value
        });
    };

    const handleSelect = (event) => {
        let {value, name} = event.target;
        const newEl = constants.Genres[value];
        setMovie({
            ...movie,
            [name]: [...movie.genres, newEl]
        });
    };

    const reset = () => {
        props.selectMovie(false);
        props.closeDialog(constants.DialogNames.EDIT);
    };

        return props.dialogOpened && (
                <Dialog type={constants.DialogNames.EDIT}
                        title={isEdit ? 'Edit movie' : 'Add movie'}>
                    <form className="form form__add-movie">
                        <FormInput label="Title" name="title" value={movie.title}
                                   handleInput={handleInput}/>
                        <FormInput label="Release Date" name="release_date" value={movie.release_date}
                                   type="date" handleInput={handleInput}/>
                        <FormInput label="Movie url" name="poster_path" value={movie.poster_path}
                                   handleInput={handleInput}/>
                        <FormSelect label="Genre" name="genres" value={movie.genres && movie.genres[[movie.genres.length-1]]}
                                    options={constants.Genres}
                                    handleSelect={handleSelect}/>
                        <FormInput label="Overview" name="overview" value={movie.overview}
                                   handleInput={handleInput}/>
                        <FormInput label="Runtime" name="runtime" type="number" value={movie.runtime}
                                   handleInput={handleInput}/>
                        <div className="form__actions">
                            <a href="#" className="form__button form__button--reset" onClick={reset}>Reset</a>
                            <a href="#" className="form__button"
                               onClick={onSubmit}>{isEdit ? 'Save' : 'Submit'}</a>
                        </div>
                    </form>
                </Dialog>
        );
};

function mapStateToProps(state) {

    return {
        dialogOpened: uiSelectors.isEditDialogOpened(state),
        selectedMovie: selectors.getSelectedMovie(state)}
}

const mapDispatchToProps = dispatch => {
    return {
        addMovie: (payload) => dispatch(addMovie(payload)),
        updateMovie: (payload) => dispatch(updateMovie(payload)),
        selectMovie: (payload) => dispatch(actions.selectMovie(payload)),
        closeDialog: (payload) => dispatch(uiActions.closeDialog(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEditMovie);