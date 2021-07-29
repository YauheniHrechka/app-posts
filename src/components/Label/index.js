import React from 'react';
import PropTypes from 'prop-types';
import { Label as FluentLabel } from '@fluentui/react/lib/Label';

const defaultAttributes = {
    style: {
        color: '#ffffff'
    }
};

const Label = ({ style, ...params }) => {
    const attributes = {
        ...defaultAttributes,
        ...params,
        style: {
            ...defaultAttributes.style,
            ...style
        }
    }

    return <FluentLabel {...attributes} />
}

Label.propTypes = {
    style: PropTypes.object,
    params: PropTypes.object,
}

Label.defaultProps = {
    style: {},
    params: {},
}

export default Label;