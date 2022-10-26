import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from './SingleCourse';
const CategorisCourse = () => {
    const courses = useLoaderData();
    return (
        <div className='border border-2 p-3'>
            <div className='row row-cols-1 row-cols-md-2 g-4'>
                {
                    courses.map(course => <SingleCourse
                        key={course._id}
                        course={course}
                    >
                    </SingleCourse>)
                }
            </div>
        </div>

    );
};

export default CategorisCourse;