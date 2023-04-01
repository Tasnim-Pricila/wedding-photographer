import { faLocationDot, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ScheduleList = () => {
    return (
        <div class="m-4 lg:flex border-2 rounded">
            <div class="flex content-center items-center m-5 text-2xl whitespace-nowrap">
                25 Dec
            </div>
            <div class="border-l border-black m-4 my-6 pl-6 flex flex-col justify-center content-center leading-normal w-full">
                <div class="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                <p class="text-gray-700">
                    <FontAwesomeIcon icon={faLocationDot} className="mr-2"></FontAwesomeIcon>
                    1 Circle Street Leominster, Ma 01453
                </p>
            </div>
        </div>
    );
};

export default ScheduleList;