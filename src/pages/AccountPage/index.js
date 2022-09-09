import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const AccountPage = (props) => {
	const [data, setData] = useState("");

	useEffect(() => {
		try {
			const getData = async () => {
				const response = await axios.get(`http://localhost:4000/account`, {
					headers: {
						Authorization: `Bearer ${props.token}`,
					},
				});
				setData(response.data.data);
				console.log(response.data.data);
			};
			getData();
		} catch (e) {
			console.log(e.message);
		}
	}, [props.token]);

	if (!data) {
		return (
			<div>
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			</div>
		);
	}

	return (
		<div>
			<h2> Welcome {data.name}, </h2>
			<br />
			<div className="account">
				<h1> Your account</h1>
				<p> Name: {data.name}</p>
				<p> Email: {data.email}</p>
			</div>
		</div>
	);
};

export { AccountPage };
