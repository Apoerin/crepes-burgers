import React from 'react';

export default function Product({ product, addToCart }) {
  const { image, title, description, price } = product;

  return (
    <li>
      <h4>{title}</h4>
      <span>{price}$</span>
      <img src={image} alt={title} />
      <p>{description}</p>
      <button type="submit" onClick={() => addToCart(product)}>
        Add to cart
      </button>
    </li>
  );
}
