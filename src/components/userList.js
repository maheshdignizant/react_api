import React from 'react'
import axios from 'axios';
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { UserData } from "../actions/apiCall"

const UserList = () => {

    // console.log("api", token);
    const dispatch = useDispatch();
    const token = JSON.parse(localStorage.getItem('api_token'));
    console.log(token)
    const userData = async () => {
        const response = await axios
            .post("http://dignizant.com/practical-task-api-doc/public/api/user-list", '',
                {
                    headers: { 'Authorization': `Bearer ${token}` }
                })
            .then(res => {
                console.log("datasss", res.data.data);
                dispatch(UserData(res.data.data))
            })
            .catch((err) => {
                console.log("Err: ", err);

            });
    }

    useEffect(() => {
        userData();
    }, [])

    const getData = useSelector((state) => state.UserData.data);
    console.log(getData);

    return (
        <>
            <div>
                <h1>
                </h1>
            </div>
            <div>
                <table class="table">
                    <th>INDEX</th>
                    <th>USER_ID</th>
                    <th>USER_NAME</th>
                    <th>USER_EMAIL</th>
                    <th>USER_DESCRIPTION</th>
                    <th>USER_PROFILE_PHOTO</th>
                    <tbody>
                        {getData.map((user, index) => {
                            return <tr key={index}>
                                <td>{index}</td>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.description}</td>
                                <td>{user.profile_photo}</td>
                            </tr>
                        })}

                    </tbody>

                </table>
            </div>
        </>
    )
}

export default UserList
