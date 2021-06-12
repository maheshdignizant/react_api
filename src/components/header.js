import React from 'react'
import {Link} from 'react-router-dom';

const header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary" >
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 ml-0 mb-lg-0">
                            <li className="nav-item mr-0">
                                <li className="mr-lg-3 mr-2 active"><Link to="/" className="nav-link active">Login</Link></li>
                            </li>
                            <li className="nav-item mr-0">
                                <li className="mr-lg-3 mr-2 active"><Link to="/register" className="nav-link active">Register</Link></li>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default header;
