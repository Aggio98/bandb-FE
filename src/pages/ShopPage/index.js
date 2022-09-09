import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

import Spinner from "react-bootstrap/Spinner";
import ProductCard from "../../components/ProductCard";
import "./style.css";

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
  /* <Link to={`/cocktails/${product.id}`}> Test </Link> */

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {product.map((product, id) => (
          <div
            style={{
              width: "50rem",
              paddingTop: "20px",
              flexWrap: "wrap",
            }}
          >
            <ProductCard
              name={product.title}
              image={product.mainImage}
              price={product.price}
              rating={product.rating}
              id={product.id}
            />
          </div>
        ))}
      </div>
      <h1></h1>
    </div>
  );
};

export { ShopPage };
