import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Signup = () => {
    const { signupAccount } = useContext(authContext)


    const heldleSignUp = e => {
        e.preventDefault()
        const base = e.target
        const email = base.email.value
        const password = base.password.value
        const getUser = { email, password }
        console.log(getUser);
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
            })
    }

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
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
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