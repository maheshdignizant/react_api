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

export const DelUser = (data) => {
    return {
        type : "DELDATA",
        payload: data
    }
}

export const EditUser = (data) => {
    console.log("xxx",data);
    return {
        type : "EDITUSER",
        payload: data
    }
}