import React from 'react';
import AddEditForm from "../components/Form/AddEditForm";
import constants from "../utils/constants";
import selectors from '../store/movies/selectors';
import uiSelectors from '../store/ui/selectors';
import {addMovie, updateMovie} from "../store/movies/thunk";
import uiActions from "../store/ui/actions";
import {connect} from "react-redux";
import actions from "../store/movies/actions";
import {withFormik} from "formik";
import * as Yup from "Yup";

const today = new Date();
const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    release_date: Yup.date().max(today, 'Date cannot be in future').required("Please enter date"),
    poster_path: Yup.string().url().required('Please enter website'),
    genres: Yup.array().min(1, "Please choose genre/genres"),
    overview: Yup.string().required("Please add movie overview"),
    runtime: Yup.number().required("Runtime is required")
});

const onSubmit = (values, props) => {
    (props.selectedMovie && !!props.selectedMovie.id)
        ? props.updateMovie(values)
        : handleAddMovie(values, props);
    props.selectMovie(false);
    props.closeDialog(constants.DialogNames.EDIT);
};

const handleAddMovie = (movie, props) => {
    const {id, ...rest} = movie;
    props.addMovie(rest);
};

const EnhancedAddEditForm = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => props.selectedMovie,
    validationSchema,
    handleSubmit: (values, bag) => onSubmit(values, bag.props),

    displayName: 'AddEditForm',
})(AddEditForm);

function mapStateToProps(state) {

    return {
        dialogOpened: uiSelectors.isEditDialogOpened(state),
        selectedMovie: selectors.getSelectedMovie(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addMovie: (payload) => dispatch(addMovie(payload)),
        updateMovie: (payload) => dispatch(updateMovie(payload)),
        selectMovie: (payload) => dispatch(actions.selectMovie(payload)),
        closeDialog: (payload) => dispatch(uiActions.closeDialog(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EnhancedAddEditForm);

