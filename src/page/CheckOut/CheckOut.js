import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaBook} from "react-icons/fa";
const CheckOut = () => {
    const checkOutInfo = useLoaderData()
    const {_id,image_url, title, details, author, info} = checkOutInfo;
    return (
        <div className='mt-3'>
            <div className="col">
                <div className="card h-100">
                <h1 className="card-text text-center my-3">{title}</h1>
                    <img style={{height:'200px'}} src={image_url} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{details}</p>
                        </div>
                        <div className='d-flex justify-content-around align-items-center'>
                            <div className='d-flex justify-content-center align-items-center border border-2 rounded rounded p-1 mb-2'>
                                <div><img style={{height:'20px', width:'20px', borderRadius:'50%'}} src={author.img} alt="" /></div>
                                <p className='m-0 ms-1 fs-6'>{author.name.length > 15 ? author.name.slice(0,14) : author.name}</p>
                            </div>
                            <div className='d-flex justify-content-center align-items-center border border-2 rounded rounded p-1 mb-2'>
                                <p className='m-0 fs-6'><FaBook className='me-1'/>{info.lecture} Lessons</p>
                            </div>
                        </div>
                            <Link className='fw-bold fs-6 btn btn-primary mx-5 mt-3 mb-3' to={`/course/${_id}`}>Show Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;