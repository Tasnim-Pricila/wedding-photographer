import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout as logOut } from "../../features/auth/authSlice";
import auth from "../../firebase.init";

const Header = () => {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth).then(() => {
      dispatch(logOut());
    });
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between py-2.5 md:px-12 md:sticky md:top-0 bg-fuchsia-100 shadow-lg z-40 gap-3 md:gap-0 max-w-full">
        <Link to="/home" className="flex justify-center">
          <div>
            <h2 className="text-2xl uppercase font-bold tracking-widest">
              TASNIM PRICILA
            </h2>
            <small className="text-sm tracking-widest uppercase pl-1">
              Wedding Photographer
            </small>
          </div>
        </Link>
        <div className="flex md:gap-5 gap-3 font-medium items-center uppercase justify-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-fuchsia-700 font-bold text-xs md:text-base" : "text-xs md:text-base"
            }
          >
            Home
          </NavLink>
          {/* <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? "text-fuchsia-700 font-bold" : ""
            }
          >
            Blog
          </NavLink> */}
          {/* <NavLink to='/about' className={({ isActive }) => (isActive ? "text-fuchsia-700 font-bold" : "")}>About Me</NavLink> */}
          {!user ? (
            <NavLink
              to="/signup"
              className={({ isActive }) =>
              isActive ? "text-fuchsia-700 font-bold text-xs md:text-base" : "text-xs md:text-base"
            }
            >
              Signup
            </NavLink>
          ) : (
            <>
              <NavLink
                to="/dashboard/home"
                className={({ isActive }) =>
                isActive ? "text-fuchsia-700 font-bold text-xs md:text-base" : "text-xs md:text-base"
              }
              >
                Dashboard
              </NavLink>
              <button
                onClick={logout}
                className="uppercase border border-fuchsia-600 px-2 py-2 rounded-lg hover:bg-fuchsia-500 hover:text-white hover:transition hover:duration-500 font-semibold group text-xs md:text-base"
              >
                Logout &nbsp;
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  className="text-fuchsia-600 group-hover:text-white"
                ></FontAwesomeIcon>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
