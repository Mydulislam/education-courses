import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
const ShowDetailsCourse = () => {
    const detailsCourse = useLoaderData()
    console.log(detailsCourse)
    const {image_url, title, details, author, info, rating } = detailsCourse;
    return (
        <Row className='px-2 py-3 border border-2'>
            <Col lg='6'>
                <div>
                    <img className='h-100 w-100' src={image_url} alt="" />
                </div>
            </Col>
            <Col lg='6' className='d-flex justify-content-center align-items-center'>
                <div>
                    <h3>{title}</h3>
                    <p>{details}</p>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <img style={{ height: '100px', width: '100px', borderRadius: '50%' }} src={author.img} alt="" />
                            <p className='mb-1 fw-bold'>Author: {author.name}</p>
                        </div>
                        <div>
                            <p className='text-decoration-underline mb-3 fs-5 fw-bold'>Course info</p>
                            <p className='mb-1 fw-bold'>Lessions: {info.lecture}</p>
                            <p className='mb-1 fw-bold'>Times: {info.hours}hours</p>
                            <p className='mb-1 fw-bold'>Ratings: {rating.number} stars</p>
                            <p className='mb-1 fw-bold'>Rating status: {rating.badge}</p>
                        </div>
                    </div>
                    <Link className='btn btn-primary mt-4' to='/courses'>Back Courses</Link>
                </div>
            </Col>
        </Row>
    );
};

export default ShowDetailsCourse;