const initialState = [];

const arrayToMap = arr => {
    if (!arr.length) return new Map();

    return arr.reduce((res, item) => {
        if (!res.has(item.userId)) {
            res.set(item.userId, []);
        }
        res.get(item.userId).push(item);

        return res;

    }, new Map())
}

const posts = (state = initialState, { type, payload }) => {
    switch (type) {

        case 'SET_POSTS':
            // return arrayToMap(payload);
            return payload;

        default:
            return state;
    }
}

export default posts;