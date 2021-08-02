import React from 'react';

import { addPost, deletePostById, fetchData } from '../../redux/actions/posts';
import { useDispatch, useSelector } from 'react-redux';
import { Button, PostForm, PostItem } from '../';

import { initializeIcons, setIconOptions, List, mergeStyleSets } from '@fluentui/react';

const Main = () => {
    initializeIcons();

    const dispatch = useDispatch();
    const [showPostForm, setShowPostForm] = React.useState(false);
    const { posts, users } = useSelector(state => state.posts);

    React.useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const onAddPost = post => {
        dispatch(addPost(post));
        setShowPostForm(false);
    }

    const onDeletePost = postId => dispatch(deletePostById(postId));
    const onRenderCell = post => <PostItem {...post} onDeletePost={onDeletePost} />
    const onClickNewPost = () => setShowPostForm(!showPostForm);

    return (
        <main className="ms-Grid-row">
            <div className="ms-Grid-col ms-xl2 ms-lg1 ms-md0 ms-sm0 ms-xs0"></div>
            <div className="ms-Grid-col ms-xl8 ms-lg10 ms-md12 ms-sm12 ms-xs12">
                <Button
                    kind="action"
                    iconProps={{ iconName: 'Add', style: { color: '#32cd32' } }}
                    className={classNames.button}
                    onClick={onClickNewPost}
                    text="New post"
                />
                {showPostForm && <PostForm users={users} onAddPost={onAddPost} />}
                <List items={posts} onRenderCell={onRenderCell} />
            </div>
            <div className="ms-Grid-col ms-xl2 ms-lg1 ms-md0 ms-sm0 ms-xs0"></div>
        </main>
    )
}

setIconOptions({
    disableWarnings: true
});

const classNames = mergeStyleSets({
    button: {
        color: '#ffffff',
        backgroundColor: '#304040',
        borderRadius: '10px',
        selectors: {
            '&:hover, &:active': {
                background: '#455353',
                color: '#ffffff'
            },
        }
    },
})

export default Main;