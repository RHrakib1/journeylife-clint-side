import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const Tourists = ({ tour }) => {
    const { _id, spotName,  averageCost, travleTime,  shortDes, seasonality, url, rating } = tour
    const { users } = useContext(authContext)



    const wordsArray = shortDes.split(' ');
    // Get the first 20 words
    const initialWords = wordsArray.slice(0, 20).join(' ');
    return (
        <div>
            <div className="rounded-xl bg-gray-700 w-96 shadow-xl">
                <figure>
                    <img className='rounded-t-xl'
                        src={url} />
                </figure>
                <div className="p-5 mt-3">
                    <h2 className="card-title text-3xl font-bold">{spotName}</h2>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p>Rating : {rating}</p>
                            <p>Seasonal : {seasonality}</p>
                        </div>
                        <div>
                            <p>Time : {travleTime}</p>
                            <p>Cost : {averageCost}</p>
                        </div>

                    </div>
                    <p className='mt-2'>{initialWords}....</p>
                    {users && (<div className='flex gap-4 mt-3 items-center'>
                        <img className='rounded-full w-12 h-12' src={users.photoURL} alt="nai" />
                        <p className='text-xl font-bold'>{users.displayName}</p>
                    </div>)

                    }
                    <div className="card-actions justify-end">
                        <Link to={`/viewAll/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tourists;