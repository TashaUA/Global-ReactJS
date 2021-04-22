import React from "react";
import PropTypes from "prop-types";

export default function FormSelect({label, name, errors, value, options, onChange}) {

    return (
        <>
            <p className={errors ? 'form__field form__field--error' : 'form__field'}>
                <label className="form__field-label" htmlFor={name}>{label}</label>
                <select multiple name={name} id={name} value={value} onChange={onChange} className="form__field-select">
                    {Object.entries(options).map(([k, v]) => (
                        <option key={k} value={v}>{v}</option>
                    ))}
                </select>
                {errors ? (<span className="form__error">{errors}</span>) : null}
            </p>
        </>
    )
}

FormSelect.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    value: PropTypes.any,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
};
