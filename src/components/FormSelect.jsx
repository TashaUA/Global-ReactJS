import React from "react";
import PropTypes from "prop-types";

export default function FormSelect({label, name, value, options, handleSelect}) {

    return (
        <>
            <p className="form__field">
                <label className="form__field-label">{label}</label>
                <select name={name} value={value} onChange={handleSelect} className="form__field-select">
                    {Object.entries(options).map(([k, v]) => (
                        <option key={k} value={v}>{v}</option>
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
