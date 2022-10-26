import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='border border-2 p-3'>
            <h1>This is course page. {courses.length}</h1>
            <div className='row row-cols-1 row-cols-md-2 g-4'>
                {
                    courses.map(course => <Course
                        key={course._id}
                        course={course}
                    >

                    </Course>)
                }
            </div>

        </div>
    );
};

export default Courses;