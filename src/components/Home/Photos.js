import React from 'react';

const Photos = ({photos}) => {
    const {title, category, img} = photos;
    return (
        <div>
            <div className='overflow-hidden'>
                <div className='image-overlay'>
                    <img src={img} alt="banner" />
                    <div className='details flex flex-col justify-center items-center text-white z-50 tracking-wider'>
                        <h2 className='uppercase'>{title}</h2>
                        <p className='my-2'>{category}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Photos;