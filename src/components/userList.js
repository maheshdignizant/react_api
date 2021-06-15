import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { UserData } from "../actions/apiCall"
import { DelUser } from '../actions/apiCall'

const UserList = () => {

    // console.log("api", token);
    const [data, setData] = useState()
    const dispatch = useDispatch();
    const token = JSON.parse(localStorage.getItem('api_token'));
    // console.log(token)
    const userData = async () => {
        const response = await axios
            .post("http://dignizant.com/practical-task-api-doc/public/api/user-list", '',
                {
                    headers: { 'Authorization': `Bearer ${token}` }
                })
            .then(res => {
                dispatch(UserData(res.data.data))
            })
            .catch((err) => {
                console.log("Err: ", err);

            });
    }

    const delData = ((id) => {
        setData(id)
        delUser();
        // userData();
    })

    let getData = useSelector((state) => state.UserData.data);;

    console.log("state", data)
    const delUser = async () => {
        const response = await axios
            .post("http://dignizant.com/practical-task-api-doc/public/api/delete-user", { user_id: data },
                {
                    headers: { 'Authorization': `Bearer ${token}` },
                })
            .then(res => {
                const finalData = getData.filter((e) => e.id !== data.data[0])
                dispatch(DelUser(finalData))
            })
            .catch((err) => {
                console.log("Erraaaa: ", err);
            });
    }

    useEffect(() => {
        userData();
    }, [])

    return (
        <>
            <div>
                <table class="table">
                    <th>INDEX</th>
                    <th>USER_ID</th>
                    <th>USER_NAME</th>
                    <th>USER_EMAIL</th>
                    <th>USER_DESCRIPTION</th>
                    <th>USER_PROFILE_PHOTO</th>
                    <th> Edit</th>
                    <th> Delete</th>
                    <tbody>
                        {getData.map((user, index) => {
                            return <tr key={index}>
                                <td>{index}</td>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.description}</td>
                                <td>{user.profile_photo}</td>
                                <td>
                                    <Link  class="btn btn-outline-primary" to={`/edituser/${user.id}`}>Update User</Link>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-danger" onClick={(e) => delData(user.id)}>Remove User</button>
                                </td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UserList
