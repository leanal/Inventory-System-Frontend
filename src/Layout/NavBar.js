import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
      <Link to={`/products`} className="nav-link text-secondary" >All Products</Link>
      </li>
      <li className="nav-item">
      <Link to={`/products/out-of-stock-products`} className="nav-link text-secondary" >Out Of Stock</Link>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li> */}
    </ul>
  );
}
