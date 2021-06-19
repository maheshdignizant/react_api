import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios'


const EditUser = ({history}) => {

    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        email: "",
        description: ""
    })
    const data = {
        user_id: id,
        name: user.name,
        email: user.email,
        description: user.description
    }

    console.log("enter fata",data);

    const token = localStorage.getItem('api_token');
    const loadUser = async () => {
        const result = await axios.post("http://dignizant.com/practical-task-api-doc/public/api/user-detail", { user_id: id }, {
            headers: { 'Authorization': `Bearer ${token}` },
        })
        console.log("eedir", result.data.data)
        setUser(result.data.data)
    }

    useEffect(() => {
        loadUser();
    }, [])

    const userData = async () => {
        await axios
            .post("http://dignizant.com/practical-task-api-doc/public/api/edit-user", data,
                {
                    headers: { 'Authorization': `Bearer ${token}` },
                })
            .then(res => {
                console.log("datasss", res
                );
            })
            .catch((err) => {
                console.log("Erraaaa: ", err);

            });
    }

    const handleSubmit = (e) => {
        alert('user details have been updated successfully')
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
                                        <div>
                                            <input type="submit" className="btnRegister" onClick={() => handleSubmit()} value="Update" />
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

export default EditUser;