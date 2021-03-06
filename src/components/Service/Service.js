import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {img, title, description, price, id} = service;
    const listedDescription = description.split("." , 4);

    const navigate = useNavigate();
    const navigateService = (id) => {
        navigate(`/checkout/${id}`);
    }
   
    return (
        <>
            <div className='flex flex-col text-center shadow-sm shadow-fuchsia-200' >
                <img src={img} alt="" className='p-2' />
                <p className='text-xl font-semibold my-4'>{title}</p>
                {
                    listedDescription.map(d => 
                        <ul key={d}>
                            <li className='leading-7'>{d}</li>
                        </ul>
                    )
                }
                <p className='text-2xl my-3 font-semibold'> $ {price} </p>
                <button className='border border-fuchsia-700 py-2 font-medium uppercase hover:bg-fuchsia-700 hover:text-white hover:transition hover:duration-500' onClick={() => navigateService(id)}>Checkout &nbsp;
                <FontAwesomeIcon icon={faShoppingBag} style={{fontSize:'16px'}}></FontAwesomeIcon>
                </button>
            </div>
        </>
    );
};

export default Service;