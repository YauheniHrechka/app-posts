import axios from 'axios';

export const fetchPosts = () => async dispatch => {

    let users = await axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => res.data)

    let posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.data);

    dispatch(setPostsAndUsers(posts, users));
}

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