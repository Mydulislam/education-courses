import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { FaBook } from "react-icons/fa";
const ShowDetailsCourse = () => {
    const detailsCourse = useLoaderData()
    console.log(detailsCourse)
    const { _id, image_url, title, details, author, info, rating } = detailsCourse;
    return (
        <Row className='px-2 py-3 border border-2'>
            <Col lg='6'>
                <div>
                    <img className='h-100' src={image_url} alt="" />
                </div>
            </Col>
            <Col lg='6' className='d-flex justify-content-center align-items-center'>
                <div>
                    <h3>{title}</h3>
                    <p>{details}</p>
                    <div>
                        <div>
                            <img style={{height:'100px', width:'100px', borderRadius:'50%'}} src={author.img} alt="" />
                            <p className='mb-1 fw-bold'>Author: {author.name}</p>
                            <p className='mb-1 fw-bold'>Lessions: {info.lecture}</p>
                            <p className='mb-1 fw-bold'>Times: {info.hours}hours</p>
                        </div>
                    </div>
                </div>
                
            </Col>
        </Row>
    );
};

export default ShowDetailsCourse;