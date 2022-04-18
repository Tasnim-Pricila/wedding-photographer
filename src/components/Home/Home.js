import React from 'react';
import useServices from '../../CustomHook/useServices';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const [services] = useServices();
    return (
        <>
            <div className='banner'>

            </div>
            <section className='services my-12 px-12 pt-8'>
                <h2 className='text-3xl text-center uppercase tracking-wider'>My Services</h2>
                <p className='text-base text-center text-fuchsia-700 mt-2 mb-8 font-semibold tracking-wide'>What I Love Doing...</p>
                <div className='flex gap-10'>
                    {
                        services.map( service => 
                            <Service
                                key={service.id}
                                
                                service={service}
                            > </Service>           
                        ) 
                    }
                </div>
                
            </section>
            {/* <div class="mb-1 text-base font-medium dark:text-white">Small</div>
<div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
  <div class="bg-gray-600 h-1.5 rounded-full dark:bg-gray-300" style="width: 45%"></div>
</div> */}
        </>
    );
};

export default Home;