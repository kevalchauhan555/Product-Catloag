import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load product details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container">
      <Link to="/" className="back-button">Back to Products</Link>
      <div className="product-detail">
        <div className="detail-image-wrapper">
          <img src={product.image} alt={product.title} className="detail-img" />
        </div>
        <div className="detail-info">
          <h2>{product.title}</h2>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;