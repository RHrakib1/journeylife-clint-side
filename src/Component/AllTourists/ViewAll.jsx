import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewAll = () => {
    const tour = useLoaderData();
    const { _id, spotName, location, averageCost, travleTime, countryName, shortDes, seasonality, totalvisit, url, rating } = tour

    return (
        <div>
            <h1>hi</h1>
        </div>
    );
};

export default ViewAll;
