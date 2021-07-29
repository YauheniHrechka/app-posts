import React from 'react';
import { Label as FluentLabel } from '@fluentui/react/lib/Label';

const defaultAttributes = {
    style: {
        color: '#ffffff'
    }
};

const Label = ({ style = {}, ...params }) => {
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

export default Label;