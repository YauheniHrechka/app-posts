import React from 'react';
import './Main.scss';

import { deletePostById, fetchPosts } from '../../redux/actions/posts';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../';

import { FocusZone, FocusZoneDirection } from '@fluentui/react/lib/FocusZone';
import { List } from '@fluentui/react/lib/List';
import { initializeIcons } from '@fluentui/react';

const Main = () => {
    initializeIcons();

    const dispatch = useDispatch();
    const { posts } = useSelector(state => state.posts);
    // console.log('posts -> ', posts);

    React.useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const onDeletePost = postId => dispatch(deletePostById(postId));

    const onRenderCell = post => <Post {...post} onDeletePost={onDeletePost} />

    return (
        <main className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm2 ms-xs2"></div>
            <div className="ms-Grid-col ms-sm8 ms-xs8">
                <span>My main</span>
                <FocusZone direction={FocusZoneDirection.vertical}>
                    <List items={posts} onRenderCell={onRenderCell} style={{ transition: '0.5s' }} />
                </FocusZone>
            </div>
            <div className="ms-Grid-col ms-sm2 ms-xs2"></div>
        </main>
    )
}

export default Main;