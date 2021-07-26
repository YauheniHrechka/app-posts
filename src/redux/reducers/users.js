const initialState = [];

const users = (state = initialState, { type, payload }) => {
    switch (type) {

        case 'SET_USERS':
            return payload;

        default:
            return state;
    }
}

export default users;