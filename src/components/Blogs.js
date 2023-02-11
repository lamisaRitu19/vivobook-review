import React from 'react';

const Blogs = () => {
    return (
        <div className='px-80'>
            <h3 className='text-xl font-semibold mt-6'>What is the purpose of context API?</h3>
            <p className='text-lg pb-4'>Context API helps to share data between components without the sending of props manually at every level. It prevents prop-drillings.</p>
            <h3 className='text-xl font-semibold'>What is semantic tag?</h3>
            <p className='text-lg pb-4'>Semantic tags suggests developers what type of data is present. It also suggests important words to help search engines with the searches.</p>
            <h3 className='text-xl font-semibold'>Difference between inline and inline-block element?</h3>
            <p className='text-lg pb-4'>Inline elements just takes the width it requires and width can not be set. Whereas in inline-block elements width can be set but it does not go on a new line to take the whole space.</p>
        </div>
    );
};

export default Blogs;