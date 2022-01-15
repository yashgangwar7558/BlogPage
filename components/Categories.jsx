import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { getCategories } from '../sevices/index';

const Categories = () => {

    const [categories, setCategories] = useState([])
    // console.log(categories);

    useEffect(() => {
        getCategories().then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 pb-10 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
            {categories.map((category, index) => (
                <Link key={index} href={`/category/${category.slug}`}>
                    <span className="block cursor-pointer pb-3 mb-3">{category.name}</span>
                </Link>
            ))}
        </div>
    )
}

export default Categories
