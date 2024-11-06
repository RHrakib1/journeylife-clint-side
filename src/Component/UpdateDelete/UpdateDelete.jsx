import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { authContext } from '../Provider/AuthProvider';

const UpdateDelete = () => {
    const tour = useLoaderData();
    const { users } = useContext(authContext)
    const { _id, spotName, location, averageCost, travleTime, countryName, shortDes, seasonality, totalvisit, url, rating } = tour
    const [users1, setusers1] = useState([])
    const hendleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            // 
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/users/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remining = users1.filter(c => c._id !== id)
                            setusers1(remining)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Spot has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        })
    }
    return (
        <div className=''>
            <div className=" rounded-t-xl bg-gray-700 shadow-2xl">
                <figure>
                    <img className='w-full rounded-t-xl'
                        src={url} />
                </figure>
                <div className="p-5">
                    <div className='flex justify-between'>
                        <p className='font-bold text-2xl'>{countryName}</p>
                        <p className='font-bold text-2xl'>{travleTime}</p>
                    </div>
                    <h2 className="mt-2 font-extrabold text-4xl card-title">{spotName}</h2>
                    <p>{shortDes}</p>
                    <div className='grid md:grid-cols-5 gap-4 mt-3'>
                        <p>Location : {location}</p>
                        <p>Seasonality : {seasonality}</p>
                        <p>Cost : {averageCost}</p>
                        <p>Visitor : {totalvisit}</p>
                        <p>Rating : {rating}</p>
                    </div>
                    {users && (<div className='flex gap-4 mt-3 items-center'>
                        <img className='rounded-full w-12 h-12' src={users.photoURL} alt="nai" />
                        <p className='text-xl font-bold'>{users.displayName}</p>
                    </div>)

                    }
                    <div className="card-actions justify-end mt-3">
                        <button onClick={() => hendleDelete(_id)} className="btn bg-red-200 text-red-700">Delete</button>
                        <Link to={`/update/${_id}`}> <button className="btn bg-green-200 text-green-700">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateDelete;