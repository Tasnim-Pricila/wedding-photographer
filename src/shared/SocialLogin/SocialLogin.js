import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

    const handleFacebookLogin = () => {
        signInWithFacebook();
        console.log(user);
    }
    const handleGoogleLogin = () => {
        signInWithGoogle();
        
    }

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