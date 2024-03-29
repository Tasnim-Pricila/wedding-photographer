import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation} from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({children}) => {

    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);

    if(loading){
        return <Loading></Loading>
    }
    if(!user){  
        return <Navigate to='/signup' state={{from:location}} replace></Navigate>
    }
    return children;  
};

export default RequireAuth;