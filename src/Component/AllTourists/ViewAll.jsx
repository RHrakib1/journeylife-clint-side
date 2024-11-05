import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ViewAll = () => {
    const tour = useLoaderData();
    const { _id, spotName, location, averageCost, travleTime, countryName, shortDes, seasonality, totalvisit, url, rating } = tour

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
                       <Link to='/alltourists'> <button  className="btn btn-primary">Go Back</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewAll;
