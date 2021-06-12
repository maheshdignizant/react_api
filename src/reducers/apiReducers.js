const intialState = {
    token: ""
}

export const ApiToken = (state = intialState, { type, payload }) => {
    switch (type) {
        case 'GETTOKEN':
            return { ...state, token: payload };
        default:
            return state;
    }
}