import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown, Input, Label, TextArea } from '../';
import { mergeStyleSets } from '@fluentui/react';

const PostForm = ({ users, onAddPost }) => {

    const [user, setUser] = React.useState({});
    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');

    const onChangeUser = (e, item) => setUser(item.user);
    const onChangeTitle = e => setTitle(e.target.value);
    const onChangeBody = e => setBody(e.target.value);

    const onClickSubmit = e => {
        e.preventDefault();
        onAddPost({ userId: user.id, user, title, body });
    }

    return (
        <form action="" className={classNames.form}>
            <Label>Author
                <Dropdown placeholder="Select an author" users={users} onChange={onChangeUser} />
            </Label>
            <Label>Title
                <Input placeholder="Input title" value={title} onChange={onChangeTitle} />
            </Label>
            <Label>Text
                <TextArea placeholder="Input text" value={body} onChange={onChangeBody} />
            </Label>
            <Button
                kind="primary"
                className={classNames.button}
                text="Create new post"
                type="submit"
                onClick={onClickSubmit}
            />
        </form >
    )
}

const classNames = mergeStyleSets({
    form: {
        background: '#304040',
        padding: '15px',
        margin: '5px 0',
        borderRadius: '15px'
    },
    button: {
        backgroundColor: '#32cd32',
        borderRadius: '10px',
        border: 'none',
        selectors: {
            '&:hover, &:active': {
                background: '#47d247',
                color: '#ffffff',
                border: 'none',
            },
        }
    },
})

PostForm.propTypes = {
    users: PropTypes.array,
    onAddPost: PropTypes.func,
}

PostForm.defaultProps = {
    users: [],
    onAddPost: () => { },
}

export default PostForm;