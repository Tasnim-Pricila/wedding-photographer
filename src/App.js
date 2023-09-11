import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom/dist";
import "./App.css";
import route from "./Routes/route";
import { useDispatch } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import { useEffect } from "react";
import { getUser, toggleLoading } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      dispatch(getUser(user?.email));
    } else {
      dispatch(toggleLoading());
    }
  });
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
