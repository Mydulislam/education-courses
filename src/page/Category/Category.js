import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Category = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('https://assignment-10-server-lilac.vercel.app/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h1 className=''>Course Lists</h1>
            {
                categories.map(category => <p className=' bg-info rounded' key={category.id}>
                    <Link className='d-block text-white text-decoration-none w-100 py-2 px-3' to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default Category;