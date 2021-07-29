const initialState = {
    posts: [],
    users: []
};

const setPosts = ({ posts, users }) => {
    posts.forEach(post => post.user = users.filter(user => post.userId === user.id)[0]);
    return posts;
}

const deletePost = (posts, payload, field) => posts.filter(post => post[field] !== payload);

const addPost = (posts, newPost) => [{ ...newPost, id: Date.now() }, ...posts];

const posts = (state = initialState, { type, payload }) => {
    switch (type) {

        case 'SET_POSTS_AND_USERS':
            return {
                posts: setPosts(payload),
                users: payload.users
            }

        case 'ADD_POST':
            return {
                ...state,
                posts: addPost(state.posts, payload)
            }

        case 'DELETE_POST_BY_ID':
            return {
                ...state,
                posts: deletePost(state.posts, payload, 'id')
            }

        default:
            return state;
    }
}

export default posts;