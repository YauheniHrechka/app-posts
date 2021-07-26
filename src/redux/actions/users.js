import axios from 'axios';

export const fetchUsers = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => dispatch(setUsers(res.data)))
}

const setUsers = users => ({
    type: 'SET_USERS',
    payload: users
})