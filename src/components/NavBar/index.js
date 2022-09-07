import "./styles.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container">
      <div className="greenbox">
        <h2 className="nav-title">
          <span>The</span>
          <span style={{ color: "white" }}>Shop</span>
        </h2>
        <NavLink className="links" to="/">
          Home
        </NavLink>
        <NavLink className="links" to="/products">
          Products
        </NavLink>
        <NavLink className="links" to="/blog">
          Blog
        </NavLink>
        <NavLink className="links" to="/shop">
          Shop
        </NavLink>
        <NavLink className="links" to="/contact">
          Contact
        </NavLink>
        <input className="redbox" placeholder="Search Product" />
      </div>
    </div>
  );
};

export { NavBar };
