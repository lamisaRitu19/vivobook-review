import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Review = ({ review }) => {
    const { name, greeting, ratings } = review;

    return (
        <div className='bg-white border-orange-400 border-2 rounded-md pb-6 '>
            <h2 className='bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300 text-2xl font-semibold py-4'>Name: {name}</h2>
            <p className='text-medium text-justify px-4 py-2'>{greeting}</p>
            <p className='text-lg font-semibold'>
                Ratings: {ratings} <FontAwesomeIcon icon={faStar} className='text-orange-600'></FontAwesomeIcon>
            </p>
        </div>
    );
};

export default Review;