import { Route, Routes } from "react-router-dom";

import {
	HomePage,
	DetailsPage,
	ShopPage,
	Login,
	Register,
	AccountPage,
} from "./pages";
import { NavBar, Banner } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
	const [token, setToken] = useState();

	const getToken = (userId) => {
		console.log("here)");
		setToken(userId);
	};
	console.log(`token app.js`, token);

	return (
		<div className="App">
			<NavBar />
			<Banner />
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/shop" element={<ShopPage />}></Route>
				<Route path="/details/:id" element={<DetailsPage />}></Route>
				<Route path="/account" element={<AccountPage token={token} />}></Route>
				<Route path="/account/register" element={<Register />}></Route>
				<Route
					path="/account/login"
					element={<Login functionProp={getToken} />}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
