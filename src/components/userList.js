import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { UserData } from "../actions/apiCall"
import { DelUser } from '../actions/apiCall'
import { EditUser } from '../actions/apiCall'

const UserList = () => {

    // console.log("api", token);
    const [data, setData] = useState({ data: "" })
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
                console.log("user", res.data.data);
                dispatch(UserData(res.data.data))
            })
            .catch((err) => {
                console.log("Err: ", err);

            });
    }

    const delData = ((id) => {
        setData({ data: [id] })
        delUser();
    })

    const newdata = {
        user_id: data.data[0]
    }

    let getData = useSelector((state) => state.UserData.data);
    // console.log("ggg",getData);

    const delUser = async () => {
        const response = await axios
            .post("http://dignizant.com/practical-task-api-doc/public/api/delete-user", newdata,
                {
                    headers: { 'Authorization': `Bearer ${token}` },

                })
            .then(res => {
                const finalData = getData.filter((e) => e.id !== data.data[0])
                dispatch(DelUser(finalData))
                //     console.log("datasss", getData
                // );
                // dispatch(delUser(res.data.data))
            })
            .catch((err) => {
                console.log("Erraaaa: ", err);

            });


        // getData.filter((e) => e.id !== data.data[0])

    }
    // const initialFormState = { id: null, name: '', email: '' ,description: '', profile_photo: '' }

    // const [currentUser, setCurrentUser] = useState(initialFormState)


    const editRow = (user) => {
      
        console.log(user);
        dispatch(EditUser(user))
        // setCurrentUser({ id: user.id, name: user.name, email: user.email, description: user.description , profile_photo : user.profile_photo})
      }
    // console.log("datasgrtgrtgs", currentUser
    // );

    useEffect(() => {
        userData();
    }, [])


    // console.log("deldfata", data)
    // const getData = useSelector((state) => state.UserData.data);
    // console.log("ggg",getData);

    // const finalData =  getData.filter((e) => e.id !== data.data[0])
    // console.log("fff", finalData);
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
                                    <button type="button" class="btn btn-primary" onClick={() => {editRow(user) }}>Update User</button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-danger" onClick={(e) => delData(user.id)} >Remove User</button>
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
