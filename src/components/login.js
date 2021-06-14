import React, { useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GetToken } from '../actions/apiCall'

const Login = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Fwfef");
    }

    const fetchToken = async () => {
        const response = await axios
            .post("http://dignizant.com/practical-task-api-doc/public/api/login", {
                email: email,
                password: password
            })
            .then(res => {
                console.log("datasss", res.data);
                dispatch(GetToken(res.data.access_token))
            })
            .catch((err) => {
                console.log("Err: ", err);
            });
        // localStorage.setItem('myData', response['data'].access_token);
        // console.log(response);
        // dispatch(GetToken(response));
        // dispatch(AllData(response.data.data.summary));
    };
    useEffect(() => {
        fetchToken();
    }, [email, password]);

    const token = useSelector((state) => state.Token.token);
    console.log("api", token);
    localStorage.setItem('api_token', JSON.stringify(token));

    return (
    
        <div className="container register media">
            <div className="row ">
                <div className="col-sm-9 col-md-3 register-left">
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                    <h3>Welcome</h3>
                    <p>Enter required details</p>
                    <div className=" pb-5">
                    <Link to="/register" className="login ">Register</Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-9 register-right ">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h3 className="register-heading">Login Form</h3>
                            <div className="row register-form justify-content-center">
                                <div className="col-sm-9 col-md-6 ">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <input type="email" 
                                        className="form-control" 
                                        placeholder="Your Email *" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" 
                                        className="form-control"
                                         placeholder="Password *"
                                          value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                            <button type="submit" className="btnRegister" disabled={!validateForm()}><Link to="/userdata" className="nav-link active"/>Login</button>
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

export default Login;
