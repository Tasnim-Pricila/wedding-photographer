import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation} from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {

    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);

    if(!user){  
        return <Navigate to='/signup' state={{from:location}} replace></Navigate>
    }

    if(loading){
        return <p> Loading... </p>
    }
    return children;
    
};

export default RequireAuth;