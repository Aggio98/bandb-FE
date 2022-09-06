import { NavLink } from "react-router-dom";
import "./styles.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

const Account = () => {
	return (
		<div>
			<ButtonToolbar aria-label="Toolbar with button groups">
				<ButtonGroup className="me-2" aria-label="First group">
					<Button
						style={{
							color: "#00005c",
							backgroundColor: "white",
							margin: "5%",
							boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)",
						}}
					>
						<NavLink to="/account/login">Login</NavLink>
					</Button>
				</ButtonGroup>
				<ButtonGroup className="me-2" aria-label="Second group">
					<Button
						style={{
							color: "#00005c",
							backgroundColor: "white",
							margin: "5%",
							boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)",
						}}
					>
						<NavLink to="/account/register">Register</NavLink>
					</Button>
				</ButtonGroup>
			</ButtonToolbar>
		</div>
	);
};

export { Account };
