import React from "react";
import { Account } from "../../components/Account";
import "./styles.css";

const HomePage = () => {
	return (
		<div className="home">
			<h1>Home</h1>
			<Account />
		</div>
	);

};

export { HomePage };
