import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='text-white flex flex-col justify-center items-center h-full leading-10 z-50 max-w-full'>
                <p className='text-6xl capitalize my-4 mb-6 text-center'>make your Wedding event memorable</p>
                <p className='text-2xl capitalize md:tracking-widest tracking-wide'>Priceless Event of your life</p>
                <a href='#gallery'>
                    <button className='border border-fuchsia-700 my-6 py-2 px-6 font-medium uppercase hover:bg-fuchsia-700 hover:text-white hover:transition hover:duration-500 tracking-widest' >See Photos &nbsp;
                        <FontAwesomeIcon icon={faCamera} style={{ fontSize: '20px' }}></FontAwesomeIcon>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Banner;