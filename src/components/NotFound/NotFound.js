import React from 'react';

const NotFound = () => {
    return (
        <>
            <div className='uppercase mx-auto md:w-1/2 w-full py-12 max-w-full'>
                <p className='tracking-[20px] text-center md:text-9xl text-6xl my-12'>OOPS!</p>
                <p className='tracking-wider text-center text-[red] font-bold text-9xl'>404</p>
                <p className='tracking-wider text-center text-5xl my-6'>Page not found</p>
                <p className='text-center my-12'>It seems you've venured too far...</p>
                
            </div>
        </>
    );
};

export default NotFound;