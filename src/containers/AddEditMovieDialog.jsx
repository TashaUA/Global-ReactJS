import React, { useState, useEffect } from 'react';
import Dialog from "../components/Dialog";
import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";
import DialogNames from "../utils/constants";

const genresOptions = {
    action: 'Action',
    adventure: 'Adventure',
    comedy: 'Comedy'
};

export default function AddEditMovie(props) {

    const [isEdit, setIsEdit] = useState(!!props.entry);
    const [movie, setMovie] = useState(
        {
            id: 0,
            title: '',
            poster_path: '',
            release_date: '',
            movie_url: '',
            genres: [],
            overview: '',
            runtime: '',
        });

    useEffect(() => {
        const {entry = []} = props;
        setMovie({...movie, ...entry});
        setIsEdit(!!props.entry);
    }, [props]);

    const onSubmit = (data) => {
        return isEdit
            ? updateUser(data)
            : createUser(id, data);
    };

    const createUser = (data) => {
        return false;
    };

    const updateUser = (id, data) => {
        return false;
    };

    const handleInput = (event) => {
        const {value, name} = event.target;

        setMovie({
            ...movie,
            [name]: value
        });
    };

        return props.openEdit && (
                <Dialog onClose={props.onCloseDialog}
                        title={isEdit ? 'Edit movie' : 'Add movie'}>
                    <form className="form form__add-movie">
                        <FormInput label="Title" name="title" value={movie.title}
                                   handleInput={handleInput}/>
                        <FormInput label="Release Date" name="release__date" value={movie.release_date}
                                   type="date" handleInput={handleInput}/>
                        <FormInput label="Movie url" name="poster_path" value={movie.poster_path}
                                   handleInput={handleInput}/>
                        <FormSelect label="Genre" name="genres" current={movie.genres && movie.genres[0]} options={genresOptions}
                                   />
                        <FormInput label="Overview" name="overview" value={movie.overview}
                                   handleInput={handleInput}/>
                        <FormInput label="Runtime" name="runtime" value={movie.runtime}
                                   handleInput={handleInput}/>
                        <div className="form__actions">
                            <a href="#" className="form__button form__button--reset" onClick={() => props.onCloseDialog(DialogNames.EDIT)}>Reset</a>
                            <a href="#" className="form__button"
                               onClick={onSubmit}>{isEdit ? 'Save' : 'Submit'}</a>
                        </div>
                    </form>
                </Dialog>
        );
}
