import React from "react";
import PropTypes from "prop-types";

export default function FormInput({label, name, value, handleInput, type = 'text'}) {
    return (
        <>
            <p className="form__field">
                <label className="form__field-label">{label}</label>
                <input className="form__field-input" name={name} value={value}
                       onChange={handleInput} type={type}/>
            </p>
        </>
    )
}

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.any,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    handleInput: PropTypes.func.isRequired,
};
