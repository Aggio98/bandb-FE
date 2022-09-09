import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
// import StarRatings from "./react-star-ratings";

export default function ProductCard(props) {
	return (
		<Card style={{ maxHeight: "300px", minHeight: "200px" }}>
			<Card.Body
				style={{
					display: "flex",
					flexDirection: "row",
				}}
			>
				<Card.Img
					style={{
						width: "150px",
						height: "150px",
					}}
					variant="top"
					src={props.image}
					alt=""
				/>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<NavLink to={`/details/${props.id}`}>
						<Card.Title>{props.name}</Card.Title>
					</NavLink>
					<div>
						<Card.Text>€{props.price}</Card.Text>
						<Card.Text>{props.rating}</Card.Text>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}
