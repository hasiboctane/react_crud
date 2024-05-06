import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const ListUser = () => {
    const [users, setUsers] = useState([]);
    const fetchUser = async () => {
        const res = await fetch('http://localhost:4000/users', { method: 'GET' });
        const data = await res.json();
        setUsers(data);
    }
    const deleteUser = async (id) => {
        if (window.confirm("Are sure you want to delete this user?")) {
            await fetch("http://localhost:4000/users/" + id, { method: "DELETE" })
            const newUser = users.filter(user => user.id !== id);
            setUsers(newUser);
            toast.warn('User Deleted !', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            })
        }
    }
    useEffect(() => {
        fetchUser();
    }, []);
    return (
        <>
            <div className="card col-md-10 mx-auto mt-2 p-1 shadow">
                <div className="card-header">
                    <div className="row">
                        <div className='col-md-6'>
                            <span className='fs-5 fw-bold '>Users List</span>
                        </div>
                        <div className='col-md-6 text-end'>
                            <Link to={'/users/create'} className='btn btn-primary '>Create User</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <table className='table table-striped table-responsive text-center'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th width='150'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user) => {
                                    return (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>
                                                <Link to={`/users/edit/${user.id}`} className='btn btn-info'>Edit</Link>
                                                <Link onClick={() => deleteUser(user.id)} className='btn btn-danger ms-1'>Delete</Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ListUser