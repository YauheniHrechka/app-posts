import React from 'react';
import './Main.scss';

import { fetchPosts } from '../../redux/actions/posts';
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {

    const dispatch = useDispatch();
    const { posts } = useSelector(state => state.posts);
    console.log('posts -> ', posts);

    React.useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <main>
            My main
        </main>
    )
}

export default Main;