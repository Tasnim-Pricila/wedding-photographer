import React from 'react';
import one from '../../images/one.png';
import two from '../../images/two.png';
import three from '../../images/three.png';
const Blog = () => {
    return (
        <div>
            
            <p> </p>
            
            <p>
            
            </p>
            <div className='px-4 lg:px-56 flex flex-col gap-12 my-24'>  
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 border shadow'>
                <div className='p-6'>
                    <img src={one} alt="" className='w-full h-full object-contain' />
                </div>
                <div className='lg:col-span-2 p-6'>
                    <h1 className='text-2xl mb-6  text-fuchsia-600 font-bold'>
                        1.  Difference between authorization and authentication.
                    </h1>
                    <p className='text-[16px] capitalize'>
                    Authorization is the process of verifying what they have access to.
                    in this process, users or persons are validated.
                    Transmits through an ID token.<br/> <br/>
                    Authentication is the process of verifying who a user is.
                    In authentication process, the identity of users are checked for providing the access to the system.
                    Transmits through an Access token

                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 border shadow'>
                <div className='p-6'>
                    <img src={two} alt="" className='w-full h-full object-contain' />
                </div>
                <div className='lg:col-span-2 p-6'>
                    <h1 className='text-2xl mb-6  text-fuchsia-600 font-bold'>
                        2.Why are you using firebase? What other options do you have to implement authentication?
                    </h1>
                    <p className='text-[16px] capitalize'>
                    Firebase is a backend provided by Google for both application development and web development. The main advantage of using Firebase is no need of physical server.
            
            In app development, we can use Firebase as backend, data given by end-user in our application gets stored directly to Firebase.
            
            In web development, some code provided by Firebase should be added with our web application's code. This enables the function of storing end-user data in firebase and there is no need of separate domain.
            Okta Auth0, One Login, Ory, Supabase, Frontegg, etc.

                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 border shadow'>
                <div className='p-6 flex items-center'>
                    <img src={three} alt="" className='h-100 w-full object-contain' />
                </div>
                <div className='lg:col-span-2 p-6'>
                    <h1 className='text-2xl mb-6 text-fuchsia-600 font-bold'>
                        3. What other services does firebase provide other than authentication?
                    </h1>
                    <p className='text-[16px]'>
                        <ul>
                            <li>Cloud Functions.</li>
                            <li>Hosting.</li>
                            <li>Cloud Storage.</li>
                            <li> Google Analytics.</li>
                            <li>Predictions.</li>
                            <li>Cloud Messaging.</li>
                            <li>Remote Config</li>
                            <li> Dynamic Links</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Blog;