import axios from 'axios';
import { fetchData, fetchPosts, fetchUsers } from '../actions/posts';

jest.mock('axios');

describe('fetchUsers function', () => {
    let res, users;

    beforeEach(() => {
        users = [];
        res = { data: { users } };
    })

    test('test fetchUsers function', () => {
        axios.get.mockReturnValue(res);

        return fetchUsers().then(data => {
            expect(data.users).toEqual(users)
        })
    });
});

describe('fetchPosts function', () => {
    let res, posts;

    beforeEach(() => {
        posts = [];
        res = { data: { posts } }
    });

    test('test fetchPosts function', () => {
        axios.get.mockReturnValue(res);
        return fetchPosts().then(data => {
            expect(data.posts).toEqual(posts)
        })
    });
});

describe('fetchData function', () => {

    test('test fetchData function', async () => {
        const thunk = fetchData();
        const dispatch = jest.fn();

        await thunk(dispatch);
        expect(dispatch).toBeCalledTimes(1);
    });
});