import React from 'react';
import PropTypes from 'prop-types';
import "./TextBox-Style.scss";


const TextBox = ({value, name, handleChange, placeholder, ...otherProps}) => (
    <textarea
        className="note-content-box"
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        {...otherProps}

    />
);
TextBox.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
};

export default TextBox
