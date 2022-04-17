import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <div className='uppercase mx-auto w-1/2 py-12'>
                <p className='tracking-[20px] text-center text-9xl my-12'>OOPS!</p>
                <p className='tracking-wider text-center text-[red] font-bold text-9xl'>404</p>
                <p className='tracking-wider text-center text-5xl my-6'>Page not found</p>
                <p className='text-center my-12'>It seems you've venured too far...</p>
                
            </div>
        </>
    );
};

export default NotFound;