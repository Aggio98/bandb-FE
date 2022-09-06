import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import ProductCard from "../../components/ProductCard";

const ShopPage = () => {

	const [product, setProduct] = useState("");

	useEffect(() => {
		try {
			const getProducts = async () => {
				const response = await axios.get("http://localhost:4000/products");
				setProduct(response.data);
				console.log(response.data);
			};
			getProducts();
		} catch (e) {
			console.log(e.message);
		}
	}, []);

	if (!product) {
		return (
			<div>
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			</div>
		);
	}

	return (
		<div>
			<h2> Test </h2>
			{product.map((product, id) => (
				<p key={id}>
					<Link to={`/cocktails/${product.id}`}> Test </Link>
					<ProductCard
						name={product.title}
						image={product.mainImage}
						price={product.price}
						id={product.id}
					/>
				</p>
			))}
		</div>
	);

  return <div></div>;

};

export { ShopPage };
