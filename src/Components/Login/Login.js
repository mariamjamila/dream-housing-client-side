import { Alert, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import useAuth from "../Firebase/Hooks/useAuth";

const Login = () => {
  const history = useHistory();
  const { logInUser, user, authError, isLoading } = useAuth();
  const [loginData, setLoginData] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    logInUser(loginData.email, loginData.password, history);
    console.log(authError);
    e.target.reset();
  };
  return (
    <div>
      <div>
        <h2 className="text-center">This is Login</h2>
      </div>

      <div className="login-box w-25 m-auto" style={{ height: "100%" }}>
        <form className="d-flex flex-column" onSubmit={handleOnSubmit}>
          <div className="mb-3 ">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              onBlur={handleOnBlur}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              onBlur={handleOnBlur}
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
          <Link style={{ textDecoration: "none" }} to="/register">
            New User?Please Register
          </Link>
        </form>
        {authError &&<Alert severity="error">{authError} </Alert>}
          {isLoading && <CircularProgress />}
          {user?.email && <Alert severity="success">user logged in successfully!</Alert>}
         
      </div>
    </div>
  );
};

export default Login;
