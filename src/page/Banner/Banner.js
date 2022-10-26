import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/img/demo-bg.jpg'
const Banner = () => {
    return (
        <div
            className='p-5 text-center bg-image'
            style={{backgroundImage: `url(${image})`, height: '400px', backgroundSize:'cover'}}>
            <div>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className='text-white'>
                        <h1 className='mb-3 fs-1'>Together We'll Explore New Things</h1>
                        <p>We belive everyone should have the opportunity to create progress throw technology</p>
                        <Link className='btn btn-primary'>Find Courses</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;