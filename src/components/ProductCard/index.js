import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

export default function ProductCard(props) {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={props.image} alt="" />
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Text>{props.price}</Card.Text>
				<NavLink to={`/details/${props.id}}`}>
					<Button variant="primary">View product</Button>
				</NavLink>
			</Card.Body>
		</Card>
	);
}
