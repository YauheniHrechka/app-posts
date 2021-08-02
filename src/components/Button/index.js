import React from 'react';
import PropTypes from 'prop-types';
import { ActionButton, DefaultButton, IconButton, PrimaryButton } from '@fluentui/react';

const Button = ({ kind, style, ...params }) => {
    const attributes = {
        ...params,
        style: {
            ...style
        }
    }

    switch (kind) {
        case 'action':
            return <ActionButton {...attributes} />

        case 'icon':
            return <IconButton {...attributes} />

        case 'primary':
            return <PrimaryButton {...attributes} />

        default:
            return <DefaultButton {...attributes} />
    }
}

Button.propTypes = {
    kind: PropTypes.string,
    style: PropTypes.object,
    params: PropTypes.object,
}

Button.defaultProps = {
    kind: 'default',
    style: {},
    params: {},
}

export default Button;