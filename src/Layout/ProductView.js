import { Link } from "react-router-dom"
import ProductAction from "./ProductAction"

export default function ProductView({ product }) {
  return (
    <tr>
      <th scope="row">{product.product_id}</th>
      <td>{product.product_brand}</td>
      <td>{product.product_name}</td>
      <td>{product.product_quantity_in_stock}</td>
      <td>{product.product_weight_in_oz}</td>
      <ProductAction product={product} />
    </tr>
  );
}
