import React from 'react'
import axios from 'axios';
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import { UserData } from "../actions/apiCall"
import { DelUser } from '../actions/apiCall'

const UserList = () => {
    let getData = useSelector((state) => state.UserData.data);

    const token = localStorage.getItem('api_token');

    const history = useHistory();

    if (token == null) {
        alert('First you have to Log in')
        history.push('/')
    }

    useEffect(() => {
        userData();
        console.log("list")
    }, [])


    const dispatch = useDispatch();
    const userData = async () => {
        await axios
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


    const delUser = async (id) => {
        await axios
            .post("http://dignizant.com/practical-task-api-doc/public/api/delete-user", { user_id: id },
                {
                    headers: { 'Authorization': `Bearer ${token}` },
                })
            .then(res => {
                const finalData = getData.filter((e) => e.id !== id)
                dispatch(DelUser(finalData))
            })
            .catch((err) => {
                console.log("Erraaaa: ", err);
            });
    }

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
                                    <Link class="btn btn-outline-primary" to={`/edituser/${user.id}`}>Update User</Link>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-danger" onClick={(e) => delUser(user.id)}>Remove User</button>
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
