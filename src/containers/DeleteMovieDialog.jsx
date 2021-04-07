import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import constants from "../utils/constants";
import Dialog from "../components/Dialog";
import actions from "../store/movies/actions";
import selectors from "../store/movies/selectors";
import {deleteMovie} from "../store/movies/thunk";
import uiActions from "../store/ui/actions";
import uiSelectors from "../store/ui/selectors";

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