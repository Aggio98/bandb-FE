import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./styles.css";
const axios = require("axios");

const Login = (props) => {
	const [text, setText] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const onFormSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.username.value);
		console.log(e.target.password.value);
		const loginUser = async () => {
			try {
				const response = await axios.post(
					"http://localhost:4000/account/login",
					{
						email: e.target.username.value,
						password: e.target.password.value,
					}
				);
				console.log(response.data);
				props.functionProp(response.data.jwt);
				navigate("../account");
			} catch (error) {
				console.log("Something is wrong", error);
			}
		};
		loginUser();
	};

	return (
		<div>
			<br />
			<form onSubmit={onFormSubmit}>
				<label htmlFor="username">Email adress: </label>
				<input
					type="text"
					value={text}
					name="username"
					placeholder="Enter your e-mail address"
					onChange={(event) => {
						setText(event.target.value);
					}}
				/>
				<br />
				<label htmlFor="password">Password: </label>
				<input
					type="text"
					value={password}
					name="password"
					placeholder="Enter your password"
					onChange={(event) => {
						setPassword(event.target.value);
					}}
				/>

				<br></br>
				{/* <p> Characters : {text.length}</p> */}
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export { Login };
