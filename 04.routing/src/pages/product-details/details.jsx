import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  return (
    <div id="product-details">
      <div className="container">
        <div className="product-details">Details Page</div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Go to Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
