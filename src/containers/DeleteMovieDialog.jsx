import React from "react";
import Dialog from "../components/Dialog";
import constants from "../utils/constants";
import PropTypes from "prop-types";
import {deleteMovie} from "../store/movies/thunk";
import {connect} from "react-redux";
import uiActions from "../store/ui/actions";
import uiSelectors from "../store/ui/selectors";
import selectors from "../store/movies/selectors";
import actions from "../store/movies/actions";

const DeleteMovieDialog = (props) => {

    const onSubmit = () => {
        props.deleteMovie(props.selectedMovie.id);
        props.selectMovie(false);
        props.closeDialog(constants.DialogNames.DELETE);
    };

    return props.dialogOpened && (
        <>
            <Dialog type={constants.DialogNames.DELETE}
                    title="Delete movie">
                <p>Are you sure you want to delete this movie?</p>
                <a href="#" className="button button--right"
                   onClick={onSubmit}>Confirm</a>
            </Dialog>
        </>
    );
};

DeleteMovieDialog.propTypes = {
    id: PropTypes.number,
};

function mapStateToProps(state) {

    return {
        dialogOpened: uiSelectors.isDeleteDialogOpened(state),
        selectedMovie: selectors.getSelectedMovie(state)
    }
}


const mapDispatchToProps = dispatch => {
    return {
        deleteMovie: (id) => { dispatch(deleteMovie(id)); },
        selectMovie: (payload) => dispatch(actions.selectMovie(payload)),
        closeDialog: (payload) => dispatch(uiActions.closeDialog(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMovieDialog);