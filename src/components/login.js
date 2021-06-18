import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { GetToken } from '../actions/apiCall'

const Login = () => {
 
    const history = useHistory();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }

    const handleSubmit = (e) => {
        fetchToken();
        e.preventDefault();
    }
    
        const fetchToken = async () => {
        await axios
            .post("http://dignizant.com/practical-task-api-doc/public/api/login", {
                email: email,
                password: password
            })
            .then(res => {
                console.log("datasss", res.data);
                dispatch(GetToken(res.data.access_token))

                localStorage.setItem('api_token', res.data.access_token);
                history.push("/userdata")

            })
            .catch((err) => {
                console.log("Err: ", err);
            });

    };

    const token = useSelector((state) => state.Token.token);

    const token_1 = localStorage.getItem('api_token');

    if(token_1 != null){
        history.push('/userdata')
        alert('You are already Log In ')
    }

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
                                            <button type="submit" className="btnRegister" disabled={!validateForm()}>Login</button>
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
