import React from 'react';
import { Link } from 'react-router-dom';

const Listed = ({ list }) => {
    const { _id, spotName, location, averageCost, travleTime, countryName, shortDes, seasonality, totalvisit, url, rating } = list

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
                    <div className="card-actions justify-end">
                        <Link to={`/updatedelete/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Listed;