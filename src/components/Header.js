import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='py-5 bg-slate-100'>
            <Link
                to='/'
                className='text-slate-500 text-xl font-semibold px-8 py-5 hover:text-orange-600 hover:border-b-2 hover:border-orange-600'
            >Home</Link>
            <Link
                to='/reviews'
                className='text-slate-500 text-xl font-semibold px-8 py-5 hover:text-orange-600 hover:border-b-2 hover:border-orange-600'
            >Reviews</Link>
            <Link
                to='/dashboard'
                className='text-slate-500 text-xl font-semibold px-8 py-5 hover:text-orange-600 hover:border-b-2 hover:border-orange-600'
            >Dashboard</Link>
            <Link
                to='/blogs'
                className='text-slate-500 text-xl font-semibold px-8 py-5 hover:text-orange-600 hover:border-b-2 hover:border-orange-600'
            >Blogs</Link>
        </nav>
    );
};

export default Header;