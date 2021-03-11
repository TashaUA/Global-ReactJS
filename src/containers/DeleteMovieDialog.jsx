import React from "react";
import Dialog from "../components/Dialog";
import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";
import PropTypes from "prop-types";

class DeleteMovieDialog extends React.Component {

    onSubmit = (id) => {
        return false;
    };

    render() {
        return this.props.openDelete ? (
            <>
                <Dialog onClose={() => this.props.onCloseDialog('delete')}
                        title="Delete movie">
                    <p>Are you sure you want to delete this movie?</p>
                    <a href="#" className="button button--right"
                       onClick={this.onSubmit}>Confirm</a>
                </Dialog>
            </>
        ) : null;
    }
}

export default DeleteMovieDialog

DeleteMovieDialog.propTypes = {
    id: PropTypes.number,
};