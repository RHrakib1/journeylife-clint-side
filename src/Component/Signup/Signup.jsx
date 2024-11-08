import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const Signup = () => {
    const { signupAccount } = useContext(authContext)
    const [showPassword, setShowPassword] = useState(false);


    const heldleSignUp = e => {
        e.preventDefault()
        const base = e.target
        const email = base.email.value
        const password = base.password.value
        const name = base.name.value
        const photo = base.photo.value
        const getUser = { email, password, name, photo }
        console.log(getUser);
        // Password validation
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        if (!passwordPattern.test(password)) {
            Swal.fire({
                title: 'Error!',
                text: 'Password must be at least 8 characters long, contain a number, an uppercase letter, and a special character.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }
        signupAccount(email, password)
            .then(result => {
                console.log(result);
                Swal.fire({
                    title: 'Success!',
                    text: 'SignUp Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })

            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: 'Error!',
                    text: {error},
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }
    const togglePasswordVisibility = e => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={heldleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='photo' placeholder="URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='relative flex items-center'>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name='password'
                                        placeholder="password"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                    <button
                                        type="button"
                                        className='absolute right-3'
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                    </button>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignUp</button>
                            </div>
                            <NavLink to='/signin'>
                                <p>Have an account? <span className='text-blue-600'>Login</span></p>
                            </NavLink>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;