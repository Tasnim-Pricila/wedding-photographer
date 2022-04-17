import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithFacebook, facebookUser, loading, error] = useSignInWithFacebook(auth);
    const [signInWithGoogle, googleUser, loading1, error1] = useSignInWithGoogle(auth);

    const handleFacebookLogin = () => {
        signInWithFacebook();
    }
    const handleGoogleLogin = () => {
        signInWithGoogle();
        
    }
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    useEffect(() => {
        if (facebookUser || googleUser) {
            navigate(from, { replace: true });
        }
    }, [facebookUser, googleUser])
    
    return (
        <div>
            <div className='text-center mt-8'>
                    <p>
                        or Sign In Using
                    </p>
                    <div className='flex gap-2 justify-center items-center mt-3'>
                        <FontAwesomeIcon icon={faFacebook} className='text-blue-700' 
                        style={{fontSize:'25px',cursor:'pointer'}} onClick={handleFacebookLogin} ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faGooglePlus} className='text-orange-600'
                        style={{fontSize:'25px',cursor:'pointer'}} onClick={handleGoogleLogin}>
                        </FontAwesomeIcon>
                    </div>
                </div>
        </div>
    );
};

export default SocialLogin;