import { useState } from "react";
import { Navigate } from "react-router-dom";
import "./styles.css";
const axios = require("axios");

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const onFormSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.username.value);
		console.log(e.target.password.value);
		console.log(e.target.name.value);
		const createUser = async () => {
			try {
				const response = await axios.post(
					"http://localhost:4000/account/register",
					{
						name: e.target.name.value,
						email: e.target.username.value,
						password: e.target.password.value,
					}
				);
				console.log(response.data);
				Navigate("../account");
			} catch (error) {
				console.log("Something is wrong", error);
			}
		};
		createUser();
		// send state to server with e.g. `window.fetch`
	};

	return (
		<div>
			<br />
			<form onSubmit={onFormSubmit}>
				<label htmlFor="name">Name: </label>
				<input
					type="text"
					value={name}
					name="name"
					placeholder="Enter your name"
					onChange={(event) => {
						setName(event.target.value);
					}}
				/>
				<br />
				<label htmlFor="username">Email adress: </label>
				<input
					type="text"
					value={email}
					name="username"
					placeholder="Enter your e-mail address"
					onChange={(event) => {
						setEmail(event.target.value);
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
				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export { Register };
