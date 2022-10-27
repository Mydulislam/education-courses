import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const checkOutInfo = useLoaderData()
    console.log(checkOutInfo)
    const {title} = checkOutInfo;
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default CheckOut;