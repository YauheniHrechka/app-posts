import React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';

const defaultAttributes = {
    multiline: true,
    rows: 3,
    style: {}
};

const TextArea = ({ style = {}, ...params }) => {
    const attributes = {
        ...defaultAttributes,
        ...params,
        style: {
            ...defaultAttributes.style,
            ...style
        }
    }

    return <TextField {...attributes} />
}

export default TextArea;