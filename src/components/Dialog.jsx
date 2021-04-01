import React, { useRef } from "react";
import PropTypes from "prop-types";
import uiActions from "../store/ui/actions";
import actions from "../store/movies/actions";
import useClickOutsideDialog from '../utils/hooks';
import {connect} from "react-redux";

const Dialog = (props) => {
    const dialogRef = useRef(null);
    //useClickOutsideDialog(dialogRef, () => onClose());

    const onClose = () => {
        props.selectMovie(false);
        props.closeDialog(props.type);
    };

    return (
        <div className="dialog">
            <div className="dialog__container" ref={dialogRef}>
                <h3 className="dialog__title">{props.title}</h3>
                <div className="dialog__content">{props.children}</div>
                <div className="dialog__close" onClick={onClose}></div>
            </div>
        </div>
    );
};

Dialog.propTypes = {
    type: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => {
    return {
        closeDialog: (payload) => dispatch(uiActions.closeDialog(payload)),
        selectMovie: (payload) => dispatch(actions.selectMovie(payload)),
    };
};

export default connect(null, mapDispatchToProps)(Dialog);