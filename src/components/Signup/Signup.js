import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';
import './Signup.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {

    const [registered, setRegistered] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    // Save Create User Info 
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    // save login user 
    const [loginUserInfo, setLoginUserInfo] = useState({   
        email: "",
        password: "" , 
    })
    
    // Handle email login 
    const handleEmailLogin = (e) => {
        setLoginUserInfo({...loginUserInfo, email: e.target.value});
    }
    // Handle password login 
    const handlePassLogin = (e) => {
        setLoginUserInfo({...loginUserInfo, password: e.target.value});
    }
    
    // Handle Signup Error 
    const [signupError, setSignupError] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        others: ""
    })
    // Handle Signin Error 
    const [error, setError] = useState({
        email: "",
        password: "",
        others: ""
    })
    
    const handleRegistered = (e) => {
        setRegistered(e.target.checked);
        console.log(e.target.checked);
    }

    // GEt User Name 
    const handleName = (e) => {
        const userName = e.target.value;
        setUserInfo({...userInfo, name: userName});
    }
    // Get User email 
    const handleEmailChange = (e) => {
        const email = e.target.value;
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(email);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: email });
            setSignupError({ ...signupError, email: "" });
        }
        else {
            setSignupError({ ...signupError, email: 'Invalid Email' });
            setUserInfo({ ...userInfo, email: "" });
        }
    }

    // Get User Password 
    const handlePassChange = (e) => {
        const pass = e.target.value;
        const passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/;
        const validPass = passRegex.test(pass);
        if (validPass) {
            setUserInfo({ ...userInfo, password: pass });
            setSignupError({ ...signupError, password: "" });
        }
        else {
            setUserInfo({ ...userInfo, password: "" });
            setSignupError({ ...signupError, password: "Set strong password" });
        }

    }

    // Confirm password 
    const handleConfirmPassChange = (e) => {
        const confirmPass = e.target.value;
        if (userInfo.password !== confirmPass) {
            setSignupError({ ...signupError, confirmPassword: "Password does not matched" });
            setUserInfo({ ...userInfo, confirmPassword: "" });
        }
        else {
            setUserInfo({ ...userInfo, confirmPassword: confirmPass });
            setSignupError({ ...signupError, confirmPassword: "" });
        }
    }

    //Create User
    const [createUserWithEmailAndPassword, createUser, createUserLoading, hookError] = useCreateUserWithEmailAndPassword(auth, {
        sendEmailVerification: true,
    });

    // SIgn in with email and pass 
    const [signInWithEmailAndPassword, loginUser, loginloading, loginError] = useSignInWithEmailAndPassword(auth);

    // Login Button 
    const handleLogin = () => {
        signInWithEmailAndPassword(loginUserInfo.email, loginUserInfo.password);
        console.log(loginUserInfo);
    }

    useEffect(() => {
        if (hookError) {
            switch (hookError.code) {
                case "auth/email-already-in-use":
                    setError({ ...signupError, email: "Email already exists" });
                    break;
                case "auth/invalid-email":
                    setError({ ...signupError, email: "Invalid Email" });
                    break;
                case "auth/invalid-password":
                    setError({ ...signupError, password: "Invalid Password" });
                    break;
                default:
                    setError({ ...signupError, others: hookError.message });
            }
        }
    }, [hookError, signupError]);

    // Login Error 

    useEffect(() => {
        if (loginError) {
            switch (loginError.code) {
                case "auth/user-not-found":
                    setError({ ...error, email: "User Not Found" });
                    break;
                case "auth/wrong-password":
                    setError({ ...error, password: "Wrong Password" });
                    break;
                case "auth/invalid-email":
                        setError({ ...error, email: "Invalid Email" });
                        break;
                default:
                    setError({ ...error, others: loginError.message });
            }
        }
    }, [loginError, error]);

    //   Submit Button 
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    // SignUp 
    const handleSignUp = () => {
        if(userInfo.confirmPassword === userInfo.password){
            createUserWithEmailAndPassword(userInfo.email, userInfo.password);
            // console.log(userInfo);        
        }     
    }

    const from = location.state?.from?.pathname || '/';
    useEffect(() => {
        if (loginUser || createUser) {
            navigate(from, { replace: true });
        }
    }, [loginUser, createUser])
    
    // handle Reset password 

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const handleForgotPassword = async () => {
        if(loginUserInfo.email){
            await sendPasswordResetEmail(loginUserInfo.email);
            toast.success('Password Reset Mail Sent',{
            theme:'dark'
            });
        }
        else{
            toast('Write Your Email...',{
                theme:'dark'
            });
        }
        
    }

    return (
        <>

            <div className='mx-auto w-1/3 my-12' >
                <form onSubmit={handleSubmit} className='flex flex-col leading-10'>
                    {/* Name Field  */}

                    {!registered &&
                        <>
                            <label htmlFor="name" className='font-semibold text-zinc-700' > Name: </label>
                            <input type="text" name="name" id="name" placeholder='Name' required onChange={handleName}
                            className='px-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400 ' />
                        </>
                    }

                    {/* Email Field  */}
                    <label htmlFor="email" className='font-semibold text-zinc-700 mt-4'> Email: </label>
                    { !registered ?
                        <>
                            <input type="email" name="name" id="email" placeholder='Email' onChange={handleEmailChange} className='px-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400 ' />
                        </>
                        :
                        <>
                            <input type="email" name="name" id="email" placeholder='Email' onChange={handleEmailLogin} className='px-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400 ' />
                        </>
                    }                   
                    { !registered &&
                        <>
                            {signupError && <span className='error-message'> {signupError.email} </span>}
                        </>
                    }
                    <>
                         {error && <span className='error-message'> {error.email} </span>}
                    </>
                    
                    

                    {/* Password Field  */}
                    <label htmlFor="pass" className='font-semibold text-zinc-700 mt-4'> Password: </label>
                    
                    { !registered ?
                        <>
                            <input type="password" name="name" id="pass" placeholder='Password' onChange={handlePassChange} className='px-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400 ' />
                            {signupError && <span className='error-message'> {signupError.password} </span>}
                        </>
                    :
                    <>
                        <input type="password" name="password" id="pass" placeholder='Password'  className='px-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400 ' onChange={handlePassLogin} />
                        {error && <span className='error-message'> {error.password} </span>}
                    </>
                    
                    }

                    {/* Confirm Pass Field  */}

                    {!registered &&
                        <>
                            <label htmlFor="cpass" className='font-semibold text-zinc-700 mt-4'> Confirm Password: </label>
                            <input type="password" name="name" id="cpass" placeholder='Confirm Password' onChange={handleConfirmPassChange} className='px-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400 ' />
                            {signupError && <span className='error-message'> {signupError.confirmPassword} </span>}
                        </>

                    }
                    <div className='flex justify-between'>
                        
                            <div>
                                <input type="checkbox" name="registered" id="registered" onChange={handleRegistered} />
                                <label htmlFor="registered" className='text-fuchsia-700 font-semibold'> Already have an account </label>
                            </div>

                            { registered &&
                            <>
                                <button className='text-fuchsia-700 font-semibold' onClick={handleForgotPassword}>Forgot Password?</button>        
                            </>
                        }    
                </div>
                    {/* Submit Button  */}
                    {
                        !registered ?
                            <button type="submit" className='border font-medium uppercase bg-fuchsia-300 hover:bg-fuchsia-700 hover:text-white hover:transition hover:duration-500 mt-6 text-base py-2 te' onClick={handleSignUp}> Signup </button>
                            :
                            <button type="submit" className='border font-medium uppercase bg-fuchsia-300 hover:bg-fuchsia-700 hover:text-white hover:transition hover:duration-500 mt-6 text-base py-2' onClick={handleLogin}> Login </button>
                    }
                    {signupError && <span className='error-message'> {signupError.others} </span>}
                    {error && <span className='error-message'> {error.others} </span>}
                </form>
                <ToastContainer pauseOnHover/>
                <SocialLogin></SocialLogin>

            </div>

        </>
    );
};

export default Signup;