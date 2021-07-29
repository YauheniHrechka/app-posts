import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown as FluentDropdown } from '@fluentui/react/lib/Dropdown';

const Dropdown = ({ users, style, ...params }) => {
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

Dropdown.propTypes = {
    users: PropTypes.array,
    style: PropTypes.object,
    params: PropTypes.object,
}

Dropdown.defaultProps = {
    users: [],
    style: {},
    params: {},
}

export default Dropdown;