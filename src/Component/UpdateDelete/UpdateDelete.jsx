import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateDelete = () => {
    const tour = useLoaderData();
    const { _id, spotName, location, averageCost, travleTime, countryName, shortDes, seasonality, totalvisit, url, rating } = tour
    const [users, setusers] = useState([])
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
                            const remining = users.filter(c => c._id !== id)
                            setusers(remining)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
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
                    <h2 className="mt-2 font-extrabold text-3xl card-title">{spotName}</h2>
                    <p>{shortDes}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => hendleDelete(_id)} className="btn bg-red-200 text-red-700">Delete</button>
                        <Link to='/alltourists'> <button className="btn bg-green-200 text-green-700">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateDelete;