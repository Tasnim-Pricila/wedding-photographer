import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Checkout from "../components/Checkout/Checkout";
import ScheduleList from "../components/Dashboard/Admin/ScheduleList";
import UpcomingEvents from "../components/Dashboard/Admin/UpcomingEvents";
import Calendar from "../components/Dashboard/Common/Calendar";
import Dashboard from "../components/Dashboard/Common/Dashboard";
import Profile from "../components/Dashboard/Common/Profile";
import Bookings from "../components/Dashboard/User/Bookings";
import Home from "../components/Home/Home";
import SinglePackage from "../components/Home/SinglePackage";
// import NotFound from "../components/NotFound/NotFound";
import RequireAuth from "../components/RequireAuth/RequireAuth";
import Signup from "../components/Signup/Signup";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Users from "../components/Dashboard/Admin/Users";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        // errorElement: <NotFound />,
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
    },
    {
        path: '/dashboard',
        element: <DashboardLayout/>,
        // errorElement: <NotFound/>,
        children: [
            {
                path: '/dashboard/home',
                element: <Dashboard />,
            },
            {
                path: '/dashboard/profile',
                element: <Profile />,
            },
            {
                path: '/dashboard/users',
                element: <Users />,
            },
            {
                path: '/dashboard/bookings',
                element: <Bookings />
            },
            {
                path: '/dashboard/schedule-list',
                element: <ScheduleList />
            },
            {
                path: '/dashboard/upcoming-events',
                element: <UpcomingEvents />
            },
            {
                path: '/dashboard/calendar',
                element: <Calendar />
            },
        ]
    }
])

export default route;