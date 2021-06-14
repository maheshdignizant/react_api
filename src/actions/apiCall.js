export const GetToken = (data) => {
    return {
        type: 'GETTOKEN',
        payload: data
    }
}

export const UserData = (data) => {
    return {
        type : "USERDATA",
        payload: data
    }
}