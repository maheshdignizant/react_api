const intialState = {
    data: []
}

export const UserData = (state = intialState, { type, payload }) => {
    switch (type) {
        case 'USERDATA':
            return { ...state, data: payload };
        default:
            return state;
    }
}