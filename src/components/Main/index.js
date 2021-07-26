import React from 'react';
import './Main.scss';

import { fetchPosts } from '../../redux/actions/posts';
import { fetchUsers } from '../../redux/actions/users';
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {

    const dispatch = useDispatch();
    const { posts, users } = useSelector(state => state);
    console.log('posts -> ', posts);
    console.log('users -> ', users);

    React.useEffect(() => {
        dispatch(fetchPosts());
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <main>
            My main
        </main>
    )
}

export default Main;