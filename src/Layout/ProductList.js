import ProductView from "./ProductView";
import { listProducts } from "../utils/api/index";
import React, { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    async function loadProducts() {
      const { data } = await listProducts(abortController.signal);
      setProducts(data);
    }

    loadProducts();

    return () => abortController.abort();
  }, []);

  if (products.length === 0) {
    return (
      <>
        <p></p>
        <h3>You have an empty inventory</h3>
        <p></p>
      </>
    );
  }
  return (
    <div>
      <p></p>
      <h2>View Products</h2>
      <p></p>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Brand</th>
            <th scope="col">Product Name</th>
            <th scope="col">Qty</th>
            <th scope="col">Weight (oz)</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductView product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
