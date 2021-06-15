import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from 'axios'

const Header = () => {


    const token = JSON.parse(localStorage.getItem('api_token'));
    console.log(token);
    const userData = async () => {
        const response = await axios
            .post("http://dignizant.com/practical-task-api-doc/public/api/logout",'', 
            {
                headers: { 'Authorization': `Bearer ${token}` },

            })
            .then(res => {
                console.log("datasss", res);
                localStorage.removeItem("api_token");
            })
            .catch((err) => {
                console.log("Err: ", err);

            });
    }
console.log('token', token)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 ml-0 mb-lg-0">
                            {localStorage.getItem('api_token') == '' ?
                                <>
                                    <li className="nav-item mr-0">
                                        <li className="mr-lg-3 mr-2 active"><Link to="/" className="nav-link active">Login</Link></li>
                                    </li>
                                    <li className="nav-item mr-0">
                                        <li className="mr-lg-3 mr-2 active"><Link to="/register" className="nav-link active">Register</Link></li>
                                    </li>
                                </> :
                                <>
                                <li className="nav-item mr-0">
                                    <li className="mr-lg-3 mr-2 active"><Link to="/addUser" className="nav-link active">Add User</Link></li>
                                </li>
                                <li className="nav-item mr-0">
                                    <li className="mr-lg-3 mr-2 active"><Link to="/userdata" className="nav-link active">User List</Link></li>
                                </li>
                                <li className="nav-item mr-0">
                                    <li className="mr-lg-3 mr-2 active"><a onClick={() => userData()} className="nav-link active">Logout</a></li>
                                </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;
