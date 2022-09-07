import "./styles.css";

export default function ProductDetail(props) {
	return (
		<div className="content">
			<div></div>
			<div className="all-images">
				<div className="small-images">
					<img className="image" variant="top" src={props.image} alt="" />
					<img className="image" variant="top" src={props.image} alt="" />
					<img className="image" variant="top" src={props.image} alt="" />
				</div>
				<div>
					<img variant="top" src={props.image} alt="" />
					<h4>{props.name} </h4>
					<h2>€ {props.price}</h2>
					<div>
						<p>{props.rating}</p>
						<button onClick={() => {}}>Add Review</button>
					</div>
				</div>
			</div>
		</div>
	);
}
