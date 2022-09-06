import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import ProductDetail from "../../components/ProductDetail";
import "./styles.css";

const DetailsPage = () => {
	const [product, setProduct] = useState("");

	const params = useParams();

	useEffect(() => {
		try {
			const getProducts = async () => {
				const response = await axios.get(
					`http://localhost:4000/products/${params.id}`
				);
				setProduct(response.data);
				console.log(response.data);
			};
			getProducts();
		} catch (e) {
			console.log(e.message);
		}
	}, [params.id]);

	if (!product) {
		return (
			<div>
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			</div>
		);
	}
	/* <Link to={`/cocktails/${product.id}`}> Test </Link> */

	return (
		<div>
			<h2> Product details </h2>
			<div>
				<div>
					<ProductDetail
						name={product.title}
						image={product.mainImage}
						price={product.price}
						id={product.id}
					/>
				</div>
			</div>
		</div>
	);
};

export { DetailsPage };
