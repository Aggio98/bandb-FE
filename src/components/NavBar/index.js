import "./styles.css";
import { Link } from "react-router-dom";

// import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container">
      <Link to="/">Home</Link>
    </div>
  );
};

export { NavBar };
