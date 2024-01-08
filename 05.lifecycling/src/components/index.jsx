import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/products-table/ProductsTable";
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const BASE_URL = "https://northwind.vercel.app/api/products";

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios(`${BASE_URL}/products`);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="products-page">
      <div className="container">
        <div className="products-page">
          <h1>Products Table</h1>
          {loading ? (
            <h1>LOADING...</h1>
          ) : (
            <ProductsTable products={products} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
