import { faAt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Users = () => {
    return (
        <div class="m-4 flex border-2 bg-gray-200 rounded-xl shadow justify-between items-center px-4">
            <div className='flex-1 flex content-center items-center '>
                <div class="m-5 text-2xl whitespace-nowrap">
                    Image
                </div>
                <div class="border-l border-black m-4 my-6 pl-6 flex flex-col justify-center content-center leading-normal">
                    <div className='flex gap-4 items-center border mb-2'>
                        <div class="text-gray-900 font-bold text-xl">
                            Tasnim Tanzim
                        </div>
                        <p className='bg-slate-300 py-1 px-4 rounded-3xl'>Owner</p>
                    </div>

                    <p class="text-gray-700">
                        <FontAwesomeIcon icon={faAt} className="mr-2 text-slate-400"></FontAwesomeIcon>
                        tasnim@gmail.com
                    </p>
                </div>
            </div>
            <div className='flex-1 text-right'>
                03 December, 2023
            </div>

        </div>
    );
};

export default Users;