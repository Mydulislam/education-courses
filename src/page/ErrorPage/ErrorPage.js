import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className="d-flex flex-row align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        {
                            error && (
                                <div>
                                    <h1 className='fs-1'>OOPS!</h1>
                                    <span className="display-1 d-block">{error.status}</span>
                                    <div className="mb-4 lead">The page you are looking for was <span className='text-danger fw-bold'>{error.statusText || error.message}</span></div>
                                    <Link to="/"className="btn btn-link">Back to Home</Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ErrorPage;