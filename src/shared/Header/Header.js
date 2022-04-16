import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className='flex justify-between py-2.5 px-12 sticky top-0 bg-fuchsia-100 shadow-lg'>
                <div>
                    <h2 className='text-2xl uppercase font-bold'>Memory Makers</h2>
                    <small className='text-sm tracking-widest uppercase'>Wedding Photographer</small>
                </div>
                <div className='flex gap-5 font-medium items-center uppercase'>
                    <NavLink to='/' className={({isActive}) => (isActive ? "text-fuchsia-700 font-bold" : "")}>Home</NavLink>
                    <NavLink to='/blogs' className={({isActive}) => (isActive ? "text-fuchsia-700 font-bold" : "")}>Blog</NavLink>
                    <NavLink to='/about' className={({isActive}) => (isActive ? "text-fuchsia-700 font-bold" : "")}>About Me</NavLink>
                    <NavLink to='/login' className={({isActive}) => (isActive ? "text-fuchsia-700 font-bold" : "")}>Login</NavLink>
                    <NavLink to='/signup' className={({isActive}) => (isActive ? "text-fuchsia-700 font-bold" : "")}>Signup</NavLink>
                </div>
            </div>
            
        </>
    );
};

export default Header;