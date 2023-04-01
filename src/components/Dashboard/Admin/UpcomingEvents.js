import { faEdit, faLocationDot, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const UpcomingEvents = () => {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg px-4 py-4 bg-slate-300 pb-10 border-b-8 border-t-2 border-l-2 border-r-2 border-b-purple-500 hover:border-t-2 hover:border-l-2 hover:border-r-2 hover:border-purple-500 hover:duration-1000">
            <div className='flex justify-between items-center'>
                <div className='text-2xl font-semibold text-purple-500'>
                    25 <br /> Dec
                </div>
                <div>
                    <FontAwesomeIcon icon={faEdit} className="mr-4 bg-slate-700 p-2 text-white rounded cursor-pointer"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTrashAlt} className="bg-slate-700 p-2 text-white rounded cursor-pointer"></FontAwesomeIcon>
                </div>
            </div>
            <div class="pt-6">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <p class="text-gray-700 pt-4">
                <FontAwesomeIcon icon={faLocationDot} className="mr-2"></FontAwesomeIcon>
                1 Circle Street Leominster, Ma 01453
            </p>
        </div>
    );
};

export default UpcomingEvents;