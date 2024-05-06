import React from 'react'
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const CreateUser = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        const res = await fetch("http://localhost:4000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        toast.success('Wow so easy!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
        });
        navigate('/users');
    }
    return (
        <>
            <div className="card col-md-6 mx-auto mt-2 p-1 shadow">
                <div className="card-header bg-light">
                    <div className="row">
                        <div className='col-md-6'>
                            <span className='fs-5 fw-bold '>Create User</span>
                        </div>
                        <div className='col-md-6 text-end'>
                            <Link to={'/users'} className='btn btn-primary '>Back</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                id="name"
                                placeholder='Enter Name'
                                {...register("name", { required: true })}
                            />
                            {errors.name && <p className='invalid-feedback'>this field is required</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                id="email"
                                placeholder='Enter email'
                                {...register("email", {
                                    required: true, pattern: {
                                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                        message: 'enter valid email address'
                                    }
                                })}
                            />
                            {errors.email && <p className='invalid-feedback'>{errors.email.message}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input
                                type="text"
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                id="phone"
                                placeholder='Enter Phone'
                                {...register("phone", { required: true })}
                            />
                            {errors.phone && <p className='invalid-feedback'>this field is required</p>}
                        </div>
                        <div className="mb-3">
                            <button className='btn btn-primary'>Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateUser