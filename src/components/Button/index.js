import React from 'react';
import { ActionButton, DefaultButton, IconButton, PrimaryButton } from '@fluentui/react/lib/Button';

const Button = ({ kind, style = {}, ...params }) => {
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

export default Button;