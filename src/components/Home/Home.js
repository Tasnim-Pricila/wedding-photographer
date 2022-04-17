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
                <h2 className='text-3xl text-center mb-8'>My Services</h2>
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
        </>
    );
};

export default Home;