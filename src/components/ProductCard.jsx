import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <Link to={`/products/${product.id}`} className="product-card">
    <div className="card-image-wrapper">
      <img src={product.image} alt={product.title} className="card-img" />
    </div>
    <div className="card-info">
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <span>{product.category}</span>
    </div>
  </Link>
);

export default ProductCard;