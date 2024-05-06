import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container ">
                <div className="collapse navbar-collapse d-flex justify-content-around " id="navbarNav">
                    <Link className="navbar-brand" to={"/"} >React CRUD</Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"users"}>Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"users/create"}>Create User</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar