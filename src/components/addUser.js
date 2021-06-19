import React from 'react'
import { Link,  useHistory } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from "react-redux";
import { UserData } from "../actions/apiCall"



const AddUser = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const token = localStorage.getItem('api_token');

    if(token == null){
        alert('You are not Admin')
        history.push('/')
    }
    const [user, setUser] = useState({
        name: "",
        email: "",
        description: "",
        password: "",
        confirm_password: ""
    })

    const data = {
        name: user.name,
        email: user.email,
        password: user.password,
        password_confirmation: user.confirm_password,
        description: user.description
    }
    
    const userData = async () => {
            await axios
            .post("http://dignizant.com/practical-task-api-doc/public/api/create-user", data,
                {
                    headers: { 'Authorization': `Bearer ${token}` },

                })
            .then(res => {
                console.log("datasssssss", res
                );
                userDataList();

            })
            .catch((err) => {
                console.log("Erraaaa: ", err);

            });
    }

        const userDataList = async () => {
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


    const handleSubmit = (e) => {
        alert('user created successfully')
        userData();
        history.push('/userdata')
    }

    return (
        <div className="container register">
            <div className="row">
                <div className="col-sm-9 col-md-3  register-left">
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                    <h3>Welcome</h3>
                    <p>Enter Required Details For creating new user</p>
                    <div className=" pb-5">
                        <Link to="/" className="login ">Login</Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-9 register-right">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active " id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h3 className="register-heading">Create User</h3>
                            <div className="row register-form justify-content-center ">
                                <div className="col-sm-9 col-md-6">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group mb-3 " >
                                            <input type="text" className="form-control" placeholder=" Name *" value={user.name} name="name" onChange={e => setUser({ ...user, name: e.target.value })} />
                                        </div>
                                        <div className="form-group  mb-3 ">
                                            <input type="email" className="form-control" placeholder="Your Email *" value={user.email} name="email" onChange={e => setUser({ ...user, email: e.target.value })} />
                                        </div>
                                        <div className="form-group  mb-3 ">
                                            <input type="text" className="form-control" placeholder="Description *" value={user.description} name="description" onChange={e => setUser({ ...user, description: e.target.value })} />
                                        </div>
                                        <div className="form-group  mb-3 ">
                                            <input type="password" className="form-control" placeholder="Password *" value={user.password} name="password" onChange={e => setUser({ ...user, password: e.target.value })} />
                                        </div>
                                        <div className="form-group  mb-3 ">
                                            <input type="password" className="form-control" placeholder="Confirm Password *" value={user.confirm_password} name="confirm_password" onChange={e => setUser({ ...user, confirm_password: e.target.value })} />
                                        </div>
                                        <div>
                                            <input type="submit" className="btnRegister" onClick={() => handleSubmit()} value="create" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser;