import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Logout = () => {

    const token = JSON.parse(localStorage.getItem('api_token'));
    console.log(token)
    const userData = async () => {
        const response = await axios
            .post("http://dignizant.com/practical-task-api-doc/public/api/logout",'', 
            {
                headers: { 'Authorization': `Bearer ${token}` },

            })
            .then(res => {
                console.log("datasss", res.data.data);
                localStorage.removeItem("api_token");
            })
            .catch((err) => {
                console.log("Err: ", err);

            });
    }
    useEffect(() => {
        userData();
    }, [])


    return (
        <div  className="logout">
            <h1>Logout Successfully!! </h1>
            
        </div>
    )
}

export default Logout
