import React from 'react';
import { Dropdown as FluentDropdown } from '@fluentui/react/lib/Dropdown';

const Dropdown = ({ users = [], style = {}, ...params }) => {
    const options = users.map(user => ({
        key: user.id,
        text: user.name,
        user
    }));

    const attributes = {
        ...params,
        options,
        style: {
            ...style
        }
    }

    return <FluentDropdown {...attributes} />
}

export default Dropdown;