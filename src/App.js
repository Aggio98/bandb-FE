import { Route, Routes } from "react-router-dom";

import { HomePage, DetailsPage, ShopPage, Login, Register } from "./pages";
import { NavBar, Banner } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="App">
	   <NavBar />
      <Banner />
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/shop" element={<ShopPage />}></Route>
				<Route path="/details/:id" element={<DetailsPage />}></Route>
				<Route path="/account/register" element={<Register />}></Route>
				<Route path="/account/login" element={<Login />}></Route>
			</Routes>
		</div>
	);

}

export default App;
