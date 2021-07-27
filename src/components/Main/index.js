import React from 'react';
import './Main.scss';

import { fetchPosts } from '../../redux/actions/posts';
import { fetchUsers } from '../../redux/actions/users';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../';

import { FocusZone, FocusZoneDirection } from '@fluentui/react/lib/FocusZone';
import { List } from '@fluentui/react/lib/List';
import { initializeIcons } from '@fluentui/react';

const Main = () => {
    initializeIcons();

    const dispatch = useDispatch();
    const { posts, users } = useSelector(state => state);
    // console.log('posts -> ', posts);
    // console.log('users -> ', users);

    React.useEffect(() => {
        dispatch(fetchPosts());
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <main className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm2 ms-xs2"></div>
            <div className="ms-Grid-col ms-sm8 ms-xs8">
                <FocusZone direction={FocusZoneDirection.vertical}>
                    <List items={posts} onRenderCell={Post} />
                </FocusZone>
            </div>
            <div className="ms-Grid-col ms-sm2 ms-xs2"></div>
        </main>
    )
}

export default Main;