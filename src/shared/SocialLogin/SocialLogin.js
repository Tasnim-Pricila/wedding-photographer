import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { facebookLogin, googleLogin } from '../../features/auth/authSlice';
import { useRegisterMutation } from '../../features/auth/authApi';

const SocialLogin = () => {
    const dispatch = useDispatch();
    const { email } = useSelector(state => state.auth);
    const [postUser] = useRegisterMutation();

    const handleFacebookLogin = () => {
        dispatch(facebookLogin())
    }
    // console.log(email);
    const handleGoogleLogin = () => {
        dispatch(googleLogin())
        
    }
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    useEffect(() => {
        // if (facebookUser) {
        //     navigate(from, { replace: true });
        // }
        // if(email){
        //     postUser({email})
        // }
    }, [email, postUser])
    
    return (
        <div>
            <div className='text-center'>
                    <div className='flex items-center justify-between gap-8 my-8'>
                        <p className='border w-1/2 h-[0.5px] border-gray-300 bg-gray-700 rounded'></p>
                        <p>OR</p>
                        <p className='border w-1/2 h-[0.5px] border-gray-300 bg-gray-700'></p>
                    </div>
                    
                    <div>
                        <button onClick={handleFacebookLogin} className='border grid grid-cols-3 w-full py-2 px-4 items-center rounded-lg border-black'>
                            <FontAwesomeIcon icon={faFacebook} className='text-blue-700' 
                            style={{fontSize:'25px'}} ></FontAwesomeIcon>
                            <span className='text-base col-span-2 font-semibold'>Continue with Facebook</span>
                        </button>
                        <button onClick={handleGoogleLogin} className='border grid grid-cols-3 w-full py-2 px-4 items-center rounded-lg border-black mt-2'>
                            <FontAwesomeIcon icon={faGoogle} className='text-[#E4432D]' 
                            style={{fontSize:'25px'}} ></FontAwesomeIcon>
                            <span className='text-base col-span-2 font-semibold'>Continue with Google</span>
                        </button>
                    </div>
                </div>
        </div>
    );
};

export default SocialLogin;