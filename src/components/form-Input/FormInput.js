import React from 'react';
import PropTypes from 'prop-types';
import './FormInput-style.scss';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className={'container'}>
        <input
            className={'form-input'}
            onChange={handleChange}
            {...otherProps}
        />
        <label className={'form-input-label'}>
            {label}
        </label>
    </div>
);
FormInput.propTypes = {
    handleChange: PropTypes.func,
    label: PropTypes.string,
};

export default FormInput;