import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@fluentui/react/lib/TextField';

const defaultAttributes = {
    multiline: true,
    rows: 3,
    style: {}
};

const TextArea = ({ style, ...params }) => {
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

TextArea.propTypes = {
    style: PropTypes.object,
    params: PropTypes.object,
}

TextArea.defaultProps = {
    style: {},
    params: {},
}

export default TextArea;