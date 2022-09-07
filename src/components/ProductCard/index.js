import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

export default function ProductCard(props) {
	return (
		<div className="card">
			<Card style={{ maxHeight: "500px", minHeight: "500px" }}>
				<Card.Img
					style={{
						width: "17rem",
						maxHeight: "300px",
					}}
					variant="top"
					src={props.image}
					alt=""
				/>
				<Card.Body style={{ display: "flex", flexDirection: "column-reverse" }}>
					<Card.Title>{props.name}</Card.Title>

					<NavLink to={`/details/${props.id}`}>
						<Button variant="primary">View product</Button>
					</NavLink>
					<Card.Text>€{props.price}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}
