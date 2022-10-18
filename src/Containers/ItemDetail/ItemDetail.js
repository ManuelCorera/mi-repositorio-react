import React from "react";

const ItemDetail = ({ product }) => {
  return (
    <div>
      <img alt={product.title} src={product.image} />
      <h1>{product.title}</h1>
      <span>{product.description}</span>
      <h3>{product.price}</h3>
    </div>
  );
};

export default ItemDetail;