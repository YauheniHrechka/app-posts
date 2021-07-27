import React from 'react';
import { Notification } from '../';
import { IconButton } from '@fluentui/react/lib/Button';
import { Stack } from '@fluentui/react';
import classNames from './styles';

const Post = ({ user: { name }, userId, id: postId, title, body, onDeletePost }) => {
    // console.log('userId -> ', userId, postId);

    const [showNotification, setShowNotification] = React.useState(false);

    const onClickDelete = () => setShowNotification(true);

    const onClickAnswer = answer => {
        setShowNotification(false);
        if (answer) onDeletePost(postId);
    }

    return (
        <>
            <div key={`${userId}-${postId}`} className={classNames.itemCell} data-is-focusable={true}>
                <div className={classNames.itemContent}>
                    <div className={classNames.itemName}>{title}</div>
                    <div className={classNames.itemIndex}>{`Author: ${name}`}</div>
                    <div>{body}</div>
                </div>
                <Stack horizontal>
                    <IconButton
                        iconProps={{ iconName: 'Delete' }}
                        className={classNames.itemButton}
                        title="Delete"
                        ariaLabel="Delete"
                        onClick={onClickDelete}
                    />
                </Stack>
            </div>
            {showNotification && <Notification title={title} onClickAnswer={onClickAnswer} />}
        </>
    )
}

export default Post;