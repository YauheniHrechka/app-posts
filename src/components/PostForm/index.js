import React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack } from '@fluentui/react';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { Label } from '@fluentui/react/lib/Label';

const PostForm = ({ users, onAddPost }) => {

    const options = users.map(user => ({
        key: user.id,
        text: user.name
    }));

    return (
        <form action="" style={{
            background: 'rgb(48, 64, 64)',
            color: 'white',
            padding: 15,
            margin: '5px 0',
            borderRadius: 15
        }}>
            {/* <Stack horizontal> */}
            {/* <TextField label="User" placeholder="Change user" onChange={() => { }} /> */}
            <Label style={{ color: 'white' }}>Author
                <Dropdown placeholder="Select an author" options={options} />
            </Label>
            {/* </Stack> */}
            <Label style={{ color: 'white' }}>Title
                <TextField placeholder="Input title" />
            </Label>
            <Label style={{ color: 'white' }}>Text
                <TextField placeholder="Input text" multiline rows={3} />
            </Label>
            <Stack horizontal>
                <PrimaryButton
                    style={{
                        background: 'limegreen',
                        borderRadius: '10px',
                        border: 'none'
                    }}
                    text="Create new post" type="submit" onClick={onAddPost} />
            </Stack>
        </form>
    )
}

export default PostForm;