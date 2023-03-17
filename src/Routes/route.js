import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Checkout from "../components/Checkout/Checkout";
import Home from "../components/Home/Home";
import SinglePackage from "../components/Home/SinglePackage";
import NotFound from "../components/NotFound/NotFound";
import RequireAuth from "../components/RequireAuth/RequireAuth";
import Signup from "../components/Signup/Signup";
import Main from "../Layout/Main";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/blogs',
                element: <Blog />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/details/:id',
                element: <SinglePackage />
            },
            {
                path: '/checkout/:packageId',
                element: <RequireAuth><Checkout /></RequireAuth>
            },
        ]
    }
])

export default route;