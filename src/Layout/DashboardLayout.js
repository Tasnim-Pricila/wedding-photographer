import { faCalendarCheck, faCalendarDays, faCameraRetro, faClipboardList, faHouseChimney, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './DashboardLayout.css';
import avatar from "../images/five.jpg"
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../images/T.jpg'

const DashboardLayout = () => {

    return (
        <div className='flex min-h-screen bg-gray-100'>
            <div className='bg-black'>
                <div id="logo" className="h-20 w-16 border-b-1 flex items-center gap-2">
                    <img src={logo} alt="" className='h-full' />
                    <div id="full-logo" className='text-fuchsia-500'>
                        <h6 className='text-2xl uppercase font-bold tracking-widest'>TASNIM PRICILA</h6>
                    </div>
                </div>
                <div id="sidebar" className="min-h-[89vh] w-16 menu bg-black text-slate-200 
                px-4 flex items-center sticky shadow">
                    <ul>
                        <li className="my-2 md:my-0">
                            <NavLink to='/dashboard/home'
                                className={
                                    ({ isActive }) =>
                                    (isActive ? "text-fuchsia-500 font-bold block py-1 md:py-3 pl-1 no-underline hover:text-fuchsia-500"
                                        : "block py-1 md:py-3 pl-1 no-underline hover:text-fuchsia-500")
                                }>
                                <FontAwesomeIcon icon={faHouseChimney} className='mr-3'></FontAwesomeIcon>
                                <span className="w-full inline-block text-sm pt-[3px]"> Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="my-2 md:my-0">
                            <NavLink to='/dashboard/schedule-list'
                                className={
                                    ({ isActive }) =>
                                    (isActive ? "text-fuchsia-500 font-bold block py-1 md:py-3 pl-1 no-underline hover:text-fuchsia-500"
                                        : "block py-1 md:py-3 pl-1 no-underline hover:text-fuchsia-500")
                                }>
                                <FontAwesomeIcon icon={faClipboardList} className='mr-3'></FontAwesomeIcon>
                                <span className="w-full inline-block text-sm pt-[3px]">
                                    Schedule List</span>
                            </NavLink>
                        </li>
                        <li className="my-2 md:my-0">
                            <NavLink to='/dashboard/upcoming-events'
                                className={
                                    ({ isActive }) =>
                                    (isActive ? "text-fuchsia-500 font-bold block py-1 md:py-3 pl-1 align-middle no-underline hover:text-fuchsia-500"
                                        : "block py-1 md:py-3 pl-1 no-underline hover:text-fuchsia-500")
                                }>
                                <FontAwesomeIcon icon={faCameraRetro} className='mr-3'></FontAwesomeIcon>
                                <span className="w-full inline-block text-sm pt-[3px]">
                                    Upcoming Events </span>
                            </NavLink>
                        </li>
                        <li className="my-2 md:my-0 ">
                            <NavLink to='/dashboard/bookings'
                                className={
                                    ({ isActive }) =>
                                    (isActive ? "text-fuchsia-500 font-bold block py-1 md:py-3 pl-1 align-middle no-underline hover:text-fuchsia-500"
                                        : "block py-1 md:py-3 pl-1 no-underline hover:text-fuchsia-500")
                                }>
                                <FontAwesomeIcon icon={faCalendarCheck} className='mr-3'></FontAwesomeIcon>
                                <span className="w-full inline-block text-sm pt-[3px]">
                                    My Bookings</span>
                            </NavLink>
                        </li>
                        <li className="my-2 md:my-0">
                            <NavLink to='/dashboard/calendar'
                                className={
                                    ({ isActive }) =>
                                    (isActive ? "text-fuchsia-500 font-bold block py-1 md:py-3 pl-1 align-middle no-underline hover:text-fuchsia-500"
                                        : "block py-1 md:py-3 pl-1 no-underline hover:text-fuchsia-500")
                                }>
                                <FontAwesomeIcon icon={faCalendarDays} className='mr-3'></FontAwesomeIcon>
                                <span className="w-full inline-block text-sm pt-[3px]">
                                    Calendar</span>
                            </NavLink>
                        </li>
                        <li className="my-2 md:my-0">
                            <NavLink to='/dashboard/users'
                                className={
                                    ({ isActive }) =>
                                    (isActive ? "text-fuchsia-500 font-bold block py-1 md:py-3 pl-1 no-underline hover:text-fuchsia-500"
                                        : "block py-1 md:py-3 pl-1 no-underline hover:text-fuchsia-500")
                                }>
                                <FontAwesomeIcon icon={faUserFriends} className='mr-3'></FontAwesomeIcon>
                                <span className="w-full inline-block text-sm pt-[3px]">
                                    Users
                                </span>
                            </NavLink>
                        </li>
                        <li className="my-2 md:my-0">
                            <NavLink to='/dashboard/profile'
                                className={
                                    ({ isActive }) =>
                                    (isActive ? "text-fuchsia-500 font-bold block py-1 md:py-3 pl-1 no-underline hover:text-fuchsia-500"
                                        : "block py-1 md:py-3 pl-1 no-underline hover:text-fuchsia-500")
                                }>
                                <FontAwesomeIcon icon={faUser} className='mr-3'></FontAwesomeIcon>
                                <span className="w-full inline-block text-sm pt-[3px]">My Profile</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="rightside" className='w-full'>
                <div id="header" class="h-20 bg-gray-200 border-b-1 flex justify-end px-4 gap-4 items-center">
                    <div className='relative avatar'>
                        <img src={avatar} alt="" className="w-16 h-16 rounded-full border-2 border-fuchsia-500" />
                        <div id="userMenu" class="bg-white nunito rounded shadow-md absolute mt-16 top-0 right-0 min-w-full">
                            <ul class="list-reset">
                                <li><a href="/" class="px-4 py-2 block text-gray-900 hover:bg-fuchsia-500 hover:text-white no-underline hover:no-underline">My account</a></li>
                                <li><a href="/" class="px-4 py-2 block text-gray-900 hover:bg-fuchsia-500 hover:text-white no-underline hover:no-underline">Notifications</a></li>
                                <li>
                                    <hr class="border-t mx-2 border-gray-400" />
                                </li>
                                <li><a href="/" class="px-4 py-2 block text-gray-900 hover:bg-fuchsia-500 hover:text-white no-underline hover:no-underline">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='p-6'>
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;