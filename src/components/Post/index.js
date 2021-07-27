import { IconButton } from '@fluentui/react/lib/Button';
import { Stack } from '@fluentui/react';
import classNames from './styles';

const Post = ({ userId, title, body }) => {
    // console.log('classNames -> ', classNames);

    const onClickDelete = () => {
        console.log('Click delete');
    }

    return (
        <div className={classNames.itemCell} data-is-focusable={true}>
            <div className={classNames.itemContent}>
                <div className={classNames.itemName}>{title}</div>
                <div className={classNames.itemIndex}>{`user ${userId}`}</div>
                <div>{body}</div>
            </div>
            <Stack horizontal>
                <IconButton iconProps={{ iconName: 'Delete' }} className={classNames.itemButton} title="Delete" ariaLabel="Delete" onClick={onClickDelete} />
            </Stack>
        </div>
    )
}

export default Post;