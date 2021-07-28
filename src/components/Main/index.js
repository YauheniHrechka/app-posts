import React from 'react';
import './Main.scss';

import { deletePostById, fetchPosts } from '../../redux/actions/posts';
import { useDispatch, useSelector } from 'react-redux';
import { PostForm, PostItem } from '../';

import { FocusZone, FocusZoneDirection } from '@fluentui/react/lib/FocusZone';
// import { Image, ImageFit } from '@fluentui/react/lib/Image';
import { List } from '@fluentui/react/lib/List';
import { initializeIcons } from '@fluentui/react';
import { ActionButton } from '@fluentui/react/lib/Button';

const Main = () => {
    initializeIcons();

    const dispatch = useDispatch();
    const [showPostForm, setShowPostForm] = React.useState(false);

    const { posts, users } = useSelector(state => state.posts);
    // console.log('posts -> ', posts);

    React.useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const onDeletePost = postId => dispatch(deletePostById(postId));

    const onRenderCell = post => <PostItem {...post} onDeletePost={onDeletePost} />

    const onClickNewPost = () => setShowPostForm(!showPostForm);

    const onAddPost = () => { };

    return (
        <main className="ms-Grid-row">
            <div className="ms-Grid-col ms-xl2 ms-lg1 ms-md0 ms-sm0 ms-xs0"></div>
            <div className="ms-Grid-col ms-xl8 ms-lg10 ms-md12 ms-sm12 ms-xs12">
                <FocusZone direction={FocusZoneDirection.vertical}>
                    <ActionButton
                        iconProps={{ iconName: 'Add', style: { color: 'limegreen' } }}
                        style={{
                            background: 'rgb(48, 64, 64)',
                            color: 'white',
                            borderRadius: 10
                            // selectors: {
                            //     '&:hover': { background: 'rgb(48, 64, 64, 0.75)' },
                            // }
                        }}
                        allowDisabledFocus
                        checked={showPostForm}
                        onClick={onClickNewPost}
                    >
                        New post
                    </ActionButton>
                    {showPostForm && <PostForm users={users} onAddPost={onAddPost} />}
                    <List items={posts} onRenderCell={onRenderCell} />
                </FocusZone>
            </div>
            <div className="ms-Grid-col ms-xl2 ms-lg1 ms-md0 ms-sm0 ms-xs0"></div>
        </main>
    )
}

export default Main;