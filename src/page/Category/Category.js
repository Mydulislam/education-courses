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
            {
                categories.map(category => <p key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default Category;