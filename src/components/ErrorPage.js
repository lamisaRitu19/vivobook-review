import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='text-6xl font-semibold mb-2'>Oops!</h1>
            <h3 className='text-2xl'>Sorry, an unexpected error has occurred.</h3>
        </div>
    );
};

export default ErrorPage;