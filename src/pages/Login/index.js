import { useState } from "react";
import "./styles.css";

const Login = () => {
	const [text, setText] = useState("");
	const [password, setPassword] = useState("");
	const onFormSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.username.value);
		console.log(e.target.password.value);
		setPassword("");
		setText("");
		// send state to server with e.g. `window.fetch`
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
