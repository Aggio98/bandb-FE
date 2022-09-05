import "./styles.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container">
      <div className="greenbox">
        <h1>TheShop</h1>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        <input placeholder="Search Product" />
      </div>
    </div>
  );
};

export { NavBar };
