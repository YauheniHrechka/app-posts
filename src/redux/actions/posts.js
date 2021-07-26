import axios from 'axios';

export const fetchPosts = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => dispatch(setPosts(res.data)));
}

const setPosts = posts => ({
    type: "SET_POSTS",
    payload: posts
})