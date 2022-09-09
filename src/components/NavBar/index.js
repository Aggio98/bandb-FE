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
        <BsPerson />
        <p style={{ color: "#8568ff" }}>{"----"}</p>
        <BsCart />
        <p style={{ color: "#8568ff" }}>{"----"}</p>
        <BsHeart />
      </div>
    </div>
  );
};

export { NavBar };
