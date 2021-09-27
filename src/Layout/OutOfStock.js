import ProductView from "./ProductView";
import { listOutOfStockProducts } from "../utils/api/index";
import React, { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  //   const completeInventory =

  useEffect(() => {
    const abortController = new AbortController();

    async function loadProducts() {
      const { data } = await listOutOfStockProducts(abortController.signal);
      setProducts(data);
    }

    loadProducts();

    return () => abortController.abort();
  }, []);
  console.log(products);

  // checks if all products are in stock
  if (products.length === 0) {
    return (
      <>
        <br></br>
        <br></br>
        <h3 className="text-center">You have complete inventory</h3>
      </>
    );
  }
  
  return (
    <div>
      <p></p>
      <h2>Out of Stock Products</h2>
      <p></p>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Brand</th>
            <th scope="col">Product Name</th>
            <th scope="col">Qty</th>
            <th scope="col">Weight (oz)</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductView p={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
