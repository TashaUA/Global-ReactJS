import React from "react";
import PropTypes from "prop-types";

export default function FormSelect({label, current = 0, options}) {
    return (
        <>
            <p className="form__field">
                <label className="form__field-label">{label}</label>
                <select name={name} className="form__field-select">
                    {Object.entries(options).map(([k, v]) => (
                        <option key={k} value={k}>{v}</option>
                    ))}
                </select>
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
