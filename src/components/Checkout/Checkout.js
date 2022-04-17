import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../CustomHook/useServices';

const Checkout = () => {
    // const [services] = useServices();
    const params = useParams();
    console.log(params);
    // const [services, setServices] = useState([]);
    
    // useEffect( () => {
    //     fetch('services.json')
    //     .then(res => res.json())
    //     .then (data => console.log(data));
    // }, [])
    // const findService = services.find(service => service.id === serviceId);
    // console.log(services);

    return (
        <div>
            <p>Service: {params.serviceId} </p>
           
        </div>
    );
};

export default Checkout;