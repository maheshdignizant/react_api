import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="container register">
            <div className="row">
                <div className="col-sm-9 col-md-3  register-left">
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                    <h3>Welcome</h3>
                    <p>Enter Required Details For Registration</p>
                    <div className=" pb-5">
                        <Link to="/" className="login ">Login</Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-9 register-right">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active " id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h3 className="register-heading">Registration Form</h3>
                            <div className="row register-form justify-content-center ">
                                <div className="col-sm-9 col-md-6">
                                    <div className="form-group mb-3 " >
                                        <input type="text" className="form-control" placeholder=" Name *" value="" />
                                    </div>
                                    <div className="form-group  mb-3 ">
                                        <input type="email" className="form-control" placeholder="Your Email *" value="" />
                                    </div>
                                    <div className="form-group  mb-3 ">
                                        <input type="text" className="form-control" placeholder="Description *" value="" />
                                    </div>
                                    <div className="form-group  mb-3 ">
                                        <input type="password" className="form-control" placeholder="Profile Photo *" value="" />
                                    </div>
                                    <div className="form-group  mb-3 ">
                                        <input type="password" className="form-control" placeholder="Password *" value="" />
                                    </div>
                                    <div className="form-group  mb-3 ">
                                        <input type="password" className="form-control" placeholder="Confirm Password *" value="" />
                                    </div>

                                </div>
                                <div className="col-md-6 ">
                                    <div>
                                        <input type="submit" className="btnRegister" value="Register" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
