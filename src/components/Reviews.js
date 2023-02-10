import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from './Review';

const Reviews = () => {
    const reviews = useLoaderData();
    console.log(reviews);

    return (
        <div className='mx-32 mt-10 grid grid-cols-3 gap-6'>
            {
                reviews.map(review => <Review key={review._id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;