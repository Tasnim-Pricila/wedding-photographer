import React from 'react';
import { useGetPackagesQuery } from '../../features/package/packageApi';
import Package from './Package';

const Packages = () => {
    const { data } = useGetPackagesQuery();
    // console.log(data);

    return (
        <div data-aos="flip-right" className='services my-12 px-12 pt-8'>
            <h2 className='text-3xl text-center uppercase tracking-wider'>My Services</h2>
            <p className='text-base text-center text-fuchsia-700 mt-2 mb-8 font-semibold tracking-wide'>What I Love Doing...</p>
            <div className='flex gap-10 flex-wrap md:flex-nowrap'>
                {
                    data?.data?.result?.map(packages =>
                        <Package
                            key={packages._id}
                            packages={packages}
                        > </Package>
                    )
                }
            </div>
        </div>
    );
};

export default Packages;