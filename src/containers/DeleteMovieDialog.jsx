import React from "react";
import Dialog from "../components/Dialog";
import DialogNames from "../utils/constants";
import PropTypes from "prop-types";

export default function DeleteMovieDialog(props) {

    const onSubmit = (id) => {
        return false;
    };

    return props.openDelete && (
        <>
            <Dialog onClose={() => props.onCloseDialog(DialogNames.DELETE)}
                    title="Delete movie">
                <p>Are you sure you want to delete this movie?</p>
                <a href="#" className="button button--right"
                   onClick={onSubmit}>Confirm</a>
            </Dialog>
        </>
    );
}

DeleteMovieDialog.propTypes = {
    id: PropTypes.number,
};