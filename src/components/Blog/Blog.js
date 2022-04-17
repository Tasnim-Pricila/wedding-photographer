import React from 'react';

const Blog = () => {
    return (
        <div>
            <p>
                Authorization:
               authorization is the process of verifying what they have access to.
               in this process, users or persons are validated.
               Transmits through an ID token

            </p>
            <p>
                Authentication:
                authentication is the process of verifying who a user is.
                In authentication process, the identity of users are checked for providing the access to the system.
                Transmits through an Access token

            </p>
            <p> Why are you using firebase? What other options do you have to implement authentication?</p>
            Firebase is a backend provided by Google for both application development and web development. The main advantage of using Firebase is no need of physical server.
            
            In app development, we can use Firebase as backend, data given by end-user in our application gets stored directly to Firebase.
            
            In web development, some code provided by Firebase should be added with our web application's code. This enables the function of storing end-user data in firebase and there is no need of separate domain.
            Okta Auth0, One Login, Ory, Supabase, Frontegg, etc.

            <p>
            Cloud Functions.
            Hosting.
            Cloud Storage.
            Google Analytics.
            Predictions.
            Cloud Messaging.
            Remote Config
            Dynamic Links
            </p>
        </div>
    );
};

export default Blog;