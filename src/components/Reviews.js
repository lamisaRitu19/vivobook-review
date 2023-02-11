import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from './Review';

const Reviews = () => {
    const { reviews } = useLoaderData();

    return (
        <div className='px-32 pt-10 pb-12 md:grid grid-cols-3 gap-6 bg-gradient-to-r from-blue-200 via-violet-200 to-rose-200'>
            {
                reviews.map(review => <Review key={review._id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;