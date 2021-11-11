import React, { useState } from "react";
import { Link } from "react-router-dom";

import useAuth from "../Firebase/Hooks/useAuth";

const Login = () => {
  const { registerUser, user, authError } = useAuth();
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
		if (user) {
		console.log(user.name);

			return;
		}
		registerUser(loginData.email, loginData.password, loginData.name);
		console.log(authError)
		console.log(user);
	e.target.reset();
  }
  return (
    <div>
      <div>
        <h2 className="text-center">This is Login</h2>
      </div>

      <div className="login-box w-25 m-auto" style={{height: "100%"}}>
      <form className="d-flex flex-column" onSubmit={handleOnSubmit}>
				<div class="mb-3 ">
					<input
						type="email"
						name="email"
						className="form-control"
						placeholder="Email"
						onBlur={handleOnBlur}
						aria-describedby="emailHelp"
					/>
				</div>
				<div class="mb-3">
					<input
						type="name"
						name="name"
						onBlur={handleOnBlur}
						className="form-control"
						placeholder="name"
					/>
				</div>
				<div class="mb-3">
					<input
						type="password"
						name="password"
						className="form-control"
						onBlur={handleOnBlur}
						placeholder="Password"
					/>
				</div>
	      <button type="submit" class="btn btn-primary">
				Log In
				</button>
        <Link  style= {{textDecoration:"none"}} to="/register">New User?Please Register</Link>
			</form>
      </div>
    </div>
  );
};

export default Login;
