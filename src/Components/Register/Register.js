import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../Firebase/Hooks/useAuth";
import useFirebase from "../Firebase/Hooks/useFirebase";

const Register = () => {
		const { registerUser, user, authError } = useAuth();
	const [loginData, setLoginData] = useState({});
	const history = useHistory();

	const handleOnBlur = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		setLoginData(newLoginData);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		if (loginData.password === !loginData.password1) {
			alert("password don't match");

			return;
		}
		registerUser(loginData.email, loginData.password, loginData.name, history);
		console.log(authError)
		console.log(user);
	e.target.reset();
	};

	return (
		<div className="w-25 m-auto">
			<h2>Register</h2>
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

				<div className="mb-3">
					<input
						type="password"
						name="password1"
						onBlur={handleOnBlur}
						class="form-control"
						placeholder="Re-type Password"
					/>
				</div>

				<button type="submit" class="btn btn-primary">
					Register
				</button>
				<Link  style= {{textDecoration:"none"}} to="/login">Registered?Please Login</Link>
			</form>
		</div>
	);
};

export default Register;
