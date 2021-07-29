import React from 'react';
import PropTypes from 'prop-types';
import { Button, Notification } from '..';
import { mergeStyleSets, getTheme, getFocusStyle } from '@fluentui/react/lib/Styling';

const PostItem = ({ user: { name }, userId, id: postId, title, body, onDeletePost }) => {

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
                <Button
                    kind="icon"
                    id={`delete-${postId}`}
                    iconProps={{ iconName: 'Delete' }}
                    className={classNames.itemButton}
                    title="Delete"
                    onClick={onClickDelete}
                />
            </div>
            {showNotification && <Notification buttonId={`delete-${postId}`} title={title} onClickAnswer={onClickAnswer} />}
        </>
    )
}

const theme = getTheme();
const { palette, fonts } = theme;

const classNames = mergeStyleSets({
    itemCell: [
        getFocusStyle(theme, { inset: -1 }),
        {
            background: '#304040',
            color: '#ffffff',
            minHeight: '54px',
            margin: '5px 0',
            padding: '10px',
            boxSizing: 'border-box',
            borderRadius: '15px',
            cursor: 'pointer',
            display: 'flex',
            selectors: {
                '&:hover': { background: '#455353' },
            },
        },
    ],
    itemContent: {
        marginLeft: '10px',
        overflow: 'hidden',
        flexGrow: 1,
    },
    itemName: [
        fonts.xLarge,
        {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
    ],
    itemIndex: {
        fontSize: fonts.small.fontSize,
        color: palette.neutralTertiary,
        marginBottom: '10px',
    },
    itemButton: {
        color: '#ff0000',
        selectors: {
            '&:hover, &:active': {
                background: '#455353',
                color: '#ff0000'
            },
        },
    }
});

// user: { name }, userId, id: postId, title, body, onDeletePost

PostItem.propTypes = {
    user: PropTypes.object,
    userId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    onDeletePost: PropTypes.func,
}

PostItem.defaultProps = {
    user: { name: '' },
    userId: NaN,
    id: NaN,
    title: '',
    body: '',
    onDeletePost: () => { },
}

export default PostItem;