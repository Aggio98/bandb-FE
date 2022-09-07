import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import DetailsCard from "../../components/DetailsCard";

const DetailsPage = () => {
  const [details, setDetails] = useState("");

  const params = useParams();

  useEffect(() => {
    try {
      const getDetails = async () => {
        const response = await axios.get(
          `http://localhost:4000/products/${params.id}`
        );
        setDetails(response.data);
        console.log(response.data, "this is data");
      };
      getDetails();
    } catch (e) {
      console.log(e.message);
    }
  }, [params.id]);

  if (!details) {
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
      <p>Home . Shop . {details.title} </p>
      <DetailsCard
        name={details.title}
        rating={details.rating}
        price={details.price}
        img={details.mainImage}
        description={details.description}
        categorie={details.categorie.title}
      />
    </div>
  );

};

export { DetailsPage };
