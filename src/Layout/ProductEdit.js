import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readProduct, updateProduct } from "../utils/api/index";

export default function ProductEdit() {
  const history = useHistory();
  const { productId } = useParams();
  //   const [product, setProduct] = useState({ product_brand: "" });
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [weight, setWeight] = useState(0);

  useEffect(() => {
    const abortController = new AbortController();

    async function loadProduct() {
      const { data } = await readProduct(productId, abortController.signal);
      setBrand(data.product_brand);
      setName(data.product_name);
      setQuantity(data.product_quantity_in_stock);
      setWeight(data.product_weight_in_oz);
    }

    loadProduct();

    return () => abortController.abort();
  }, [productId]);

  const brandChangeHandler = (event) => setBrand(event.target.value);
  const nameChangeHandler = (event) => setName(event.target.value);
  const quantityChangeHandler = (event) => setQuantity(event.target.value);
  const weightChangeHandler = (event) => setWeight(event.target.value);
  const cancelClickHandler = () => history.push(`/products`); // `/products/${productId}`

  async function saveClickHandler() {
    const abortController = new AbortController();
    const updatedProduct = {
      data: {
        product_id: productId,
        product_brand: brand,
        product_name: name,
        product_quantity_in_stock: quantity,
        product_weight_in_oz: weight,
      },
    };
    
    const apiUpdate = await updateProduct(
      updatedProduct,
      abortController.signal
    );
    console.log("apiUpdate", apiUpdate);

    // Opens a window confirming the product update
    const confirmation = window.confirm("\nYour update had been saved.");
    if (confirmation || !confirmation) {
        return history.push("/products")
    } 

    return () => abortController.abort();
  }

  return (
    <>
      <h2 className="card-title">Edit Product</h2>
      <form name="edit" onSubmit={saveClickHandler}>
        <div className="form-group">
          <label htmlFor="brand">Brand</label>
          <input
            className="form-control"
            id="brand"
            type="text"
            name="brand"
            required={true}
            onChange={brandChangeHandler}
            value={brand}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            id="name"
            type="text"
            name="name"
            required={true}
            onChange={nameChangeHandler}
            value={name}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            className="form-control"
            id="quantity"
            type="number"
            min="0"
            name="quantity"
            required={true}
            onChange={quantityChangeHandler}
            value={quantity}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight</label>
          <input
            className="form-control"
            id="weight"
            type="number"
            min="0"
            name="weight"
            onChange={weightChangeHandler}
            value={weight}
          ></input>
        </div>
        <br></br>
        <button
          type=""
          className="btn btn-secondary"
          onClick={cancelClickHandler}
        >
          Cancel
        </button>
        <span> </span>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Save
        </button>
      </form>
    </>
  );
}
