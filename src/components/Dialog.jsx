import React, { useRef } from "react";
import PropTypes from "prop-types";
import useClickOutsideDialog from '../utils/hooks';

export default function Dialog(props) {
    const dialogRef = useRef(null);
    useClickOutsideDialog(dialogRef, () => props.onClose());

    return (
        <div className="dialog">
            <div className="dialog__container" ref={dialogRef}>
                <h3 className="dialog__title">{props.title}</h3>
                <div className="dialog__content">{props.children}</div>
                <div className="dialog__close" onClick={props.onClose}></div>
            </div>
        </div>
    );
}

Dialog.propTypes = {
    onClose: PropTypes.func.isRequired,
};