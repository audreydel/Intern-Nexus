import React from 'react';

const RadioButton = ({value, checked, onChange, label}) => {
    return (
        <div>
            <label>
                <input type="radio" value={value} checked={checked} onChange={onChange} />
                {label}
            </label>
        </div>
    );
};

export default RadioButton;