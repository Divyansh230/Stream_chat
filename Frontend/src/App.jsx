import React from "react";
import Left from "./Home/Left/Left";
import Right from "./Home/Right/Right";
import Logout from "./Home/Left1/Logout";
import Signup from "./Home/components/Signup";
import Login from "./Home/components/Login";
import { useAuth } from "./context/AuthProvider";
import { Routes, Route, Navigate } from "react-router-dom";
const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <Routes>
      <Route
        path="/"
        element={
          authUser ? (
            <div className="flex h-screen">
              <Logout></Logout>
              <Left></Left>
              <Right></Right>
            </div>
          ) : (
            <Navigate to={"/login"} />
          )
        }
      />
      <Route path="/login" element={authUser ? <Navigate to={'/'} /> : <Login />} />
      <Route path="/signup" element={authUser ? <Navigate to={'/'} /> : <Signup />} />
    </Routes>
  );
};

export default App;