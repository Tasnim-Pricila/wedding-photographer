import {
  faCalendarCheck,
  faCalendarDays,
  faCameraRetro,
  faClipboardList,
  faHouseChimney,
  faUser,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./DashboardLayout.css";
import avatar from "../images/avatar.png";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../images/T.jpg";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";
import { useDispatch, useSelector } from "react-redux";
import { logout as logOut } from "../features/auth/authSlice";

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { role } = useSelector((state) => state.auth);

  const logout = () => {
    signOut(auth).then(() => {
      dispatch(logOut());
    });
    navigate('/signup')
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div
        id="sidebar"
        className="h-screen w-[68px] menu bg-black text-slate-200 fixed shadow-2xl"
      >
        <div id="logo" onClick={() => navigate('/')} className="h-20 w-full border-b-1 flex gap-1 cursor-pointer">
          <img src={logo} alt="" className="h-full" />
          <div id="full-logo" className="text-fuchsia-500 pt-3">
            <h6 className="text-2xl uppercase font-bold tracking-widest">
              TASNIM PRICILA
            </h6>
          </div>
        </div>

        <div className="h-[88vh] overflow-y-auto flex items-center">
          <ul className="flex flex-col justify-center px-4">
            <li className="my-2 md:my-0">
              <NavLink
                to="/dashboard/home"
                className={({ isActive }) =>
                  isActive
                    ? "text-fuchsia-500 font-bold flex py-1 md:py-3 pl-1 no-underline hover:text-fuchsia-500 items-center"
                    : "flex py-1 md:py-3 pl-1 no-underline hover:text-fuchsia-500 items-center"
                }
              >
                <FontAwesomeIcon
                  icon={faHouseChimney}
                  className="mr-3"
                ></FontAwesomeIcon>
                <span className="w-full text-sm pt-[3px]"> Dashboard</span>
              </NavLink>
            </li>

            {role === "admin" && (
              <>
                <li className="my-2 md:my-0">
                  <NavLink
                    to="/dashboard/schedule-list"
                    className={({ isActive }) =>
                      isActive
                        ? "text-fuchsia-500 font-bold flex py-1 md:py-3 pl-1 no-underline hover:text-fuchsia-500 items-center"
                        : "flex py-1 md:py-3 pl-1 no-underline hover:text-fuchsia-500 items-center"
                    }
                  >
                    <FontAwesomeIcon
                      icon={faClipboardList}
                      className="mr-3"
                    ></FontAwesomeIcon>
                    <span className="w-full text-sm pt-[3px]">
                      Schedule List
                    </span>
                  </NavLink>
                </li>
              </>
            )}

            <li className="my-2 md:my-0">
              <NavLink
                to="/dashboard/upcoming-events"
                className={({ isActive }) =>
                  isActive
                    ? "text-fuchsia-500 font-bold flex py-1 md:py-3 pl-1 align-middle no-underline hover:text-fuchsia-500 items-center"
                    : "flex py-1 md:py-3 pl-1 no-underline hover:text-fuchsia-500 items-center"
                }
              >
                <FontAwesomeIcon
                  icon={faCameraRetro}
                  className="mr-3"
                ></FontAwesomeIcon>
                <span className="w-full text-sm pt-[3px]">
                  Upcoming Events{" "}
                </span>
              </NavLink>
            </li>

            {role === "user" && (
              <li className="my-2 md:my-0 ">
                <NavLink
                  to="/dashboard/bookings"
                  className={({ isActive }) =>
                    isActive
                      ? "text-fuchsia-500 font-bold flex py-1 md:py-3 pl-1 align-middle no-underline hover:text-fuchsia-500 items-center"
                      : "flex py-1 md:py-3 pl-1 no-underline hover:text-fuchsia-500 items-center"
                  }
                >
                  <FontAwesomeIcon
                    icon={faCalendarCheck}
                    className="mr-3"
                  ></FontAwesomeIcon>
                  <span className="w-full text-sm pt-[3px]">My Bookings</span>
                </NavLink>
              </li>
            )}

            <li className="my-2 md:my-0">
              <NavLink
                to="/dashboard/calendar"
                className={({ isActive }) =>
                  isActive
                    ? "text-fuchsia-500 font-bold flex py-1 md:py-3 pl-1 align-middle no-underline hover:text-fuchsia-500 items-center"
                    : "flex py-1 md:py-3 pl-1 no-underline hover:text-fuchsia-500 items-center"
                }
              >
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="mr-3"
                ></FontAwesomeIcon>
                <span className="w-full text-sm pt-[3px]">Calendar</span>
              </NavLink>
            </li>

            {role === "admin" && (
              <li className="my-2 md:my-0">
                <NavLink
                  to="/dashboard/users"
                  className={({ isActive }) =>
                    isActive
                      ? "text-fuchsia-500 font-bold flex py-1 md:py-3 pl-1 no-underline hover:text-fuchsia-500 items-center"
                      : "flex py-1 md:py-3 pl-1 no-underline hover:text-fuchsia-500 items-center"
                  }
                >
                  <FontAwesomeIcon
                    icon={faUserFriends}
                    className="mr-3"
                  ></FontAwesomeIcon>
                  <span className="w-full text-sm pt-[3px]">All Users</span>
                </NavLink>
              </li>
            )}

            {/* <li className="my-2 md:my-0">
              <NavLink
                to="/dashboard/profile"
                className={({ isActive }) =>
                  isActive
                    ? "text-fuchsia-500 font-bold flex py-1 md:py-3 pl-1 no-underline hover:text-fuchsia-500 items-center"
                    : "flex py-1 md:py-3 pl-1 no-underline hover:text-fuchsia-500 items-center"
                }
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className="mr-3"
                ></FontAwesomeIcon>
                <span className="w-full text-sm pt-[3px]">My Profile</span>
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>

      <div id="rightside" className="w-full">
        <div
          id="header"
          className="h-20 bg-gray-200 border-b-1 flex justify-end px-4 gap-4 items-center"
        >
          <div className="relative avatar">
            <img
              src={avatar}
              alt=""
              className="w-16 h-16 rounded-full border-2 border-fuchsia-500"
            />
            <div
              id="userMenu"
              className="bg-white nunito rounded shadow-md absolute mt-16 top-0 right-0 z-[99]"
            >
              <ul className="list-reset w-32">
                <li>
                  <Link
                    to="/"
                    className="px-4 py-2 block text-gray-900 hover:bg-fuchsia-500 hover:text-white no-underline hover:no-underline"
                  >
                    My account
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="px-4 py-2 block text-gray-900 hover:bg-fuchsia-500 hover:text-white no-underline hover:no-underline"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <hr className="border-t mx-2 border-gray-400" />
                </li>
                <li onClick={logout}>
                  <button
                    className="px-4 py-2 block text-gray-900 hover:bg-fuchsia-500 hover:text-white no-underline hover:no-underline w-full text-left"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-6 ml-16">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
