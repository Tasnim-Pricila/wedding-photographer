import React, { useEffect, useState } from 'react';
import {useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    // Save User Info 
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })

    // Handle Error 
    const [error, setError] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        others: ""
    })
    const[registered, setRegistered] = useState(false);
    const handleRegistered = (e) =>{
        setRegistered(e.target.checked);
    }

    // Get User email 
    const handleEmailChange = (e) => {
        const email = e.target.value;
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(email);
        if(validEmail){
            setUserInfo({...userInfo, email: email});
            setError({...error, email: ""});
        }
        else{
            setError({...error, email: 'Invalid Email'});
            setUserInfo({...userInfo, email: ""});
        }
        
    }

    // Get User Password 
    const handlePassChange = (e) => {
        const pass = e.target.value;
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const validPass = passRegex.test(pass);
        if(validPass){
            setUserInfo({...userInfo, password: pass});
            setError({...error, password: ""});
        }
        else{
            setUserInfo({...userInfo, password:""});
            setError({...error, password: "Set strong password"});
        }
        
    }

    // Confirm password 
    const handleConfirmPassChange = (e) => {
        const confirmPass = e.target.value;   
        if(userInfo.password !== confirmPass){
            setError({...error, confirmPassword:"Password does not matched"});
            setUserInfo({...userInfo, confirmPassword: ""});
        }
        else{
            setUserInfo({...userInfo, confirmPassword: confirmPass});
            setError({...error, confirmPassword:""});
        }
    }

    //Create User 
    const [createUserWithEmailAndPassword, createUser, loading, hookError] = useCreateUserWithEmailAndPassword(auth, { 
        sendEmailVerification: true,
    });

    // SIgn in with email and pass 
    const [signInWithEmailAndPassword, user, loginloading, loginError] = useSignInWithEmailAndPassword(auth);


     // Login Button 
     const handleLogin = (e) => {
        signInWithEmailAndPassword(userInfo.email, userInfo.password);
        console.log(userInfo);
    }

    useEffect(() => {
        if(hookError){
            switch(hookError.code){
                case "auth/email-already-in-use":
                    setError({...error, email: "Email already exists"});
                    break;
                case "auth/invalid-email":
                    setError({...error, email: "Invalid Email"});
                    break;
                case "auth/invalid-password":
                    setError({...error, password: "Invalid Password"});
                    break;
                default:
                setError({...error, others: hookError.message});
            }
        }
    },[error, hookError]);

     //   Submit Button 
     const handleSubmit = (e) => {
        e.preventDefault();
    }
    // SignUp 
     const handleSignUp = (e) => {
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        // console.log(userInfo);
    }

    const from = location.state?.from?.pathname || '/';
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])
    
    return (
        <>
    
            <div className='mx-auto w-1/3 my-12' >
                <form onSubmit={handleSubmit} className='flex flex-col leading-10'>
                    {/* Name Field  */}

                    {   !registered && 
                        <>
                            <label htmlFor="name" className='font-semibold text-zinc-700'> Name: </label>
                            <input type="text" name="name" id="name" placeholder='Name' required
                            className='px-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400 text-pink-500' />
                        </>
                        
                    }

                    {/* Email Field  */}
                    <label htmlFor="email" className='font-semibold text-zinc-700 mt-4'> Email: </label>
                    <input type="email" name="name" id="email" placeholder='Email' onChange={handleEmailChange} className='px-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400 text-pink-500' />
                    
                    {error && <span className='text-danger fw-bold'> {error.email} </span>}

                    {/* Password Field  */}
                    <label htmlFor="pass" className='font-semibold text-zinc-700 mt-4'> Password: </label>
                    <input type="password" name="name" id="pass" placeholder='Password' onChange={handlePassChange} className='px-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400 text-pink-500' />
                    {error && <span className='text-danger fw-bold'> {error.password} </span>}
                    

                    {/* Confirm Pass Field  */}

                    {   !registered && 
                        <>
                            <label htmlFor="cpass" className='font-semibold text-zinc-700 mt-4'> Confirm Password: </label>
                            <input type="password" name="name" id="cpass" placeholder='Confirm Password' onChange={handleConfirmPassChange} className='px-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400 text-pink-500' />
                            {error && <span className='text-danger fw-bold'> {error.confirmPassword} </span>}
                        </>
                        
                    }
                    <div>
                        <input type="checkbox" name="registered" id="registered" onChange={handleRegistered}/>
                        <label htmlFor="registered" className='text-fuchsia-700 font-semibold'> Already have an account </label>
                    </div>
                    

                    {/* Submit Button  */}
                    {
                        !registered ?
                        <button type="submit" className='border font-medium uppercase bg-fuchsia-300 hover:bg-fuchsia-700 hover:text-white hover:transition hover:duration-500 mt-6 text-base py-1' onClick={handleSignUp}> Signup </button>
                        :
                        <button type="submit" className='border font-medium uppercase bg-fuchsia-300 hover:bg-fuchsia-700 hover:text-white hover:transition hover:duration-500 mt-6 text-base py-1' onClick={handleLogin}> Login </button>
                    }
                    {error && <span className='text-danger fw-bold'> {error.others} </span>}
                </form>             
            </div>
            
        </>
    );
};

export default Login;