import React from 'react';

const Review = ({ review }) => {
    const { name, greeting, ratings } = review;
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Greetings: {greeting}</p>
            <p><small>Ratings: {ratings}</small></p>
        </div>
    );
};

export default Review;