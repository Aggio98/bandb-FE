import "./styles.css";
import { NavLink } from "react-router-dom";
import { BsCart, BsPerson, BsHeart } from "react-icons/bs";

const NavBar = () => {
	return (
		<div className="big-container">
			<div className="greenbox">
				<h2>
					<span>The</span>
					<span style={{ color: "white" }}>Shop</span>
				</h2>
				<NavLink className="links" to="/">
					Home
				</NavLink>
				<NavLink className="links" to="/products">
					Products
				</NavLink>
				<NavLink className="links" to="/account">
					Account
				</NavLink>
				<NavLink className="links" to="/shop">
					Shop
				</NavLink>
				<NavLink className="links" to="/contact">
					Contact
				</NavLink>
				<input placeholder="Search Product" />
			</div>
			<div className="rightnav">
				<NavLink className="links" to="/account">
					<BsPerson />
				</NavLink>

				<p style={{ color: "#8568ff" }}>{"----"}</p>
				<NavLink className="links" to="/account/login">
					<BsCart />
				</NavLink>
				<p style={{ color: "#8568ff" }}>{"----"}</p>
				<NavLink className="links" to="/account">
					<BsHeart />
				</NavLink>
			</div>
		</div>
	);
};

export { NavBar };
