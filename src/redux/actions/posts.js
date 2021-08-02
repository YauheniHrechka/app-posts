import axios from 'axios';

export const fetchUsers = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        return res.data;
    } catch (e) {
        return []
    }
}

export const fetchPosts = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return res.data;
    } catch (e) {
        return []
    }
}

export const fetchData = () => async dispatch => dispatch(setPostsAndUsers(await fetchPosts(), await fetchUsers()));

const setPostsAndUsers = (posts, users) => ({
    type: 'SET_POSTS_AND_USERS',
    payload: {
        posts,
        users
    }
})

export const addPost = post => ({
    type: 'ADD_POST',
    payload: post
})

export const deletePostById = postId => ({
    type: 'DELETE_POST_BY_ID',
    payload: postId
})