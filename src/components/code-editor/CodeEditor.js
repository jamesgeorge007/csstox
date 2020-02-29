import React, { useState, useEffect } from 'react';

import './code-editor.scss';

const CodeEditor = (props) => {
    const { placeholder, initialValue, valueChanged, readOnly, type } = props;
    const [value, setValue] = useState(initialValue);

    useEffect(() => { setValue(initialValue); }, [initialValue]);

    const handleChange = (value) => {
        setValue(value);
        valueChanged(value);
    };

    const className = type === 'input' ? 'code code--input' : 'code code--output';

    return (
        <textarea
            className={className}
            value={value}
            readOnly={readOnly}
            placeholder={placeholder}
            onChange={(e) => handleChange(e.target.value)}
        />
    );
};

export default CodeEditor;
