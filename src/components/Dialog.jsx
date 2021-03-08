import React from "react";
import PropTypes from "prop-types";

export default function Dialog(props) {
    return props.show ? (
        <div className="dialog">
            <div className="dialog__container">
            <h3 className="dialog__title">{props.title}</h3>
            <div className="dialog__content">{props.children}</div>
            <div className="dialog__close" onClick={props.onClose}></div>
            </div>
        </div>
    ) : null ;
}

Dialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};