import React from "react";
import PropTypes from "prop-types";

export default function FormInput({label, name, errors, value, onChange, type = 'text'}) {
    return (
        <>
            <p className={errors ? 'form__field form__field--error' : 'form__field'}>
                <label className="form__field-label" htmlFor={name}>{label}</label>
                <input data-testid={name+'Input'} className="form__field-input" id={name} name={name} value={value}
                       onChange={onChange} type={type}/>
                {errors ? (<span className="form__error">{errors}</span>) : null}
            </p>
        </>
    )
}

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.any,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func,
};
