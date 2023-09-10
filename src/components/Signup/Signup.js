import React, { useEffect, useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";
import "./Signup.css";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { createUser, loginUser } from "../../features/auth/authSlice";
import { toast } from "react-hot-toast";
import { useRegisterMutation } from "../../features/auth/authApi";
import Loading from "../Loading/Loading";

const Signup = () => {
  const [registered, setRegistered] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, email, error, isError } = useSelector(
    (state) => state.auth
  );
  const [postUser, { isLoading: postLoading }] = useRegisterMutation();

  const navigate = useNavigate();
  const location = useLocation();

  // Save Create User Info
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // save login user
  const [loginUserInfo, setLoginUserInfo] = useState({
    email: "",
    password: "",
  });

  // Handle Signup Error
  const [signupError, setSignupError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    others: "",
  });

  // Get User email
  const handleEmailChange = (e) => {
    const email = e.target.value;
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(email);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: email });
      setSignupError({ ...signupError, email: "" });
    } else {
      setSignupError({ ...signupError, email: "Invalid Email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  // Get User Password
  const handlePassChange = (e) => {
    const pass = e.target.value;
    const passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/;
    const validPass = passRegex.test(pass);
    if (validPass) {
      setUserInfo({ ...userInfo, password: pass });
      setSignupError({ ...signupError, password: "" });
    } else {
      setUserInfo({ ...userInfo, password: "" });
      setSignupError({ ...signupError, password: "Set strong password" });
    }
  };

  // Confirm password
  const handleConfirmPassChange = (e) => {
    const confirmPass = e.target.value;
    if (userInfo.password !== confirmPass) {
      setSignupError({
        ...signupError,
        confirmPassword: "Password does not matched",
      });
      setUserInfo({ ...userInfo, confirmPassword: "" });
    } else {
      setUserInfo({ ...userInfo, confirmPassword: confirmPass });
      setSignupError({ ...signupError, confirmPassword: "" });
    }
  };

  // SignUp
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (userInfo.confirmPassword === userInfo.password) {
      dispatch(
        createUser({ email: userInfo.email, password: userInfo.password })
      );
      await postUser(userInfo);
    }
  };

  // Login Button
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(
      loginUser({
        email: loginUserInfo.email,
        password: loginUserInfo.password,
      })
    );
  };

  // Redirect from login page
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (!isLoading && email) {
      navigate(from, { replace: true });
    }
  }, [isLoading, email, from, navigate]);

  // handle Reset password

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const handleForgotPassword = async () => {
    if (loginUserInfo.email) {
      await sendPasswordResetEmail(loginUserInfo.email);
      toast.success("Password Reset Mail Sent", {
        theme: "dark",
      });
    } else {
      toast("Write Your Email...", {
        theme: "dark",
      });
    }
  };

  if (sending || isLoading || postLoading) {
    return <Loading />;
  }

  return (
    <div className="mx-auto md:w-1/3 my-12 w-full px-2 md:px-0">
      <p className="text-2xl text-center mb-4 font-semibold text-fuchsia-600">
        {" "}
        {!registered ? "Signup" : "Login"}{" "}
      </p>

      <form
        onSubmit={!registered ? handleSignUp : handleLogin}
        className="flex flex-col leading-10"
      >
        {/* Name Field  */}

        {!registered && (
          <>
            <label htmlFor="name" className="font-semibold text-zinc-700">
              {" "}
              Name:{" "}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
              onChange={(e) =>
                setUserInfo({ ...userInfo, name: e.target.value })
              }
              className="px-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400 "
            />
          </>
        )}

        {/* Email Field  */}
        <label htmlFor="email" className="font-semibold text-zinc-700 mt-4">
          {" "}
          Email:{" "}
        </label>
        {!registered ? (
          <>
            <input
              type="email"
              name="name"
              id="email"
              placeholder="Email"
              onChange={handleEmailChange}
              className="px-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400"
              required
            />
            {signupError && (
              <span className="error-message"> {signupError.email} </span>
            )}
          </>
        ) : (
          <>
            <input
              type="email"
              name="name"
              id="email"
              placeholder="Email"
              onChange={(e) =>
                setLoginUserInfo({ ...loginUserInfo, email: e.target.value })
              }
              className="px-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400"
              required
            />
          </>
        )}

        {/* Password Field  */}
        <label htmlFor="pass" className="font-semibold text-zinc-700 mt-4">
          {" "}
          Password:{" "}
        </label>
        {!registered ? (
          <>
            <input
              type="password"
              name="name"
              id="pass"
              placeholder="Password"
              onChange={handlePassChange}
              className="px-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400 "
              required
            />
            {signupError && (
              <span className="error-message"> {signupError.password} </span>
            )}
          </>
        ) : (
          <>
            <input
              type="password"
              name="password"
              id="pass"
              placeholder="Password"
              className="px-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400 "
              onChange={(e) =>
                setLoginUserInfo({ ...loginUserInfo, password: e.target.value })
              }
              required
            />
            <button
              type="submit"
              className="border font-medium uppercase bg-fuchsia-300 hover:bg-fuchsia-700 hover:text-white hover:transition hover:duration-500 mt-6 text-base py-2"
            >
              {" "}
              Login{" "}
            </button>
          </>
        )}

        {/* Confirm Pass Field  */}
        {!registered && (
          <>
            <label htmlFor="cpass" className="font-semibold text-zinc-700 mt-4">
              {" "}
              Confirm Password:{" "}
            </label>
            <input
              type="password"
              name="name"
              id="cpass"
              placeholder="Confirm Password"
              onChange={handleConfirmPassChange}
              className="px-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400 "
              required
            />
            {signupError && (
              <span className="error-message">
                {" "}
                {signupError.confirmPassword}{" "}
              </span>
            )}
            <button
              type="submit"
              className="border uppercase bg-fuchsia-300 hover:bg-fuchsia-700 hover:text-white hover:transition hover:duration-500 mt-4 text-base py-2 font-bold"
            >
              {" "}
              Signup{" "}
            </button>
            {signupError && (
              <span className="error-message mb-2"> {signupError.others} </span>
            )}
          </>
        )}
        {isError && (
          <span className="error-message leading-5 mb-4"> {error} </span>
        )}
      </form>

      <div className="flex justify-between md:flex-row flex-col">
        <div>
          <input
            type="checkbox"
            name="registered"
            id="registered"
            onChange={(e) => setRegistered(e.target.checked)}
          />
          <label
            htmlFor="registered"
            className="text-fuchsia-700 font-semibold"
          >
            {" "}
            Already have an account{" "}
          </label>
        </div>

        {registered && (
          <>
            <button
              className="text-fuchsia-700 font-semibold"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </button>
          </>
        )}
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Signup;
