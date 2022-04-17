import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);


    const logout = () => {
        signOut(auth);
    }
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
                    {
                        !user ?
                    
                        <NavLink to='/signup' className={({isActive}) => (isActive ? "text-fuchsia-700 font-bold" : "")}>Signup</NavLink>
                        :
                        <button onClick={logout} className='uppercase border border-fuchsia-600 px-3 py-2 rounded-lg hover:bg-fuchsia-500 hover:text-white hover:transition hover:duration-500'>Logout</button>
                    }
                </div>
            </div>
            
        </>
    );
};

export default Header;