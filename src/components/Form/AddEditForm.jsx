import React from 'react';
import constants from "../../utils/constants";
import Dialog from "../Dialog";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

export default function AddEditForm(props) {

    const isEdit = props.selectedMovie && !!props.selectedMovie.id;

    const reset = (e) => {
        e.preventDefault();
        props.selectMovie(false);
        props.closeDialog(constants.DialogNames.EDIT);
    };

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = props;

    return props.dialogOpened && (
        <Dialog type={constants.DialogNames.EDIT}
                title={isEdit ? 'Edit movie' : 'Add movie'}>
            <form onSubmit={handleSubmit} className="form form__add-movie" data-testid="form">
                <FormInput label="Title" name="title" errors={errors.title} value={values.title}
                           onChange={handleChange}/>
                <FormInput label="Release Date" name="release_date" errors={errors.release_date}
                           value={values.release_date}
                           type="date" onChange={handleChange}/>
                <FormInput label="Movie url" name="poster_path" errors={errors.poster_path} value={values.poster_path}
                           onChange={handleChange}/>
                <FormSelect label="Genre" name="genres" errors={errors.genres} value={values.genres}
                            options={constants.Genres}
                            onChange={handleChange}/>
                <FormInput label="Overview" name="overview" errors={errors.overview} value={values.overview}
                           onChange={handleChange}/>
                <FormInput label="Runtime" name="runtime" type="number" errors={errors.runtime} value={values.runtime}
                           onChange={handleChange}/>
                <div className="form__actions">
                    <a href="#" className="form__button form__button--reset" onClick={reset}>Reset</a>
                    <button type="submit" className="form__button"
                       >{isEdit ? 'Save' : 'Submit'}</button>
                </div>
            </form>
        </Dialog>
    );
};