import React from "react";

import { FaTimes } from "react-icons/fa";

export default function Cart({ product, removeFromCart, count, incrementCount, decrementCount }) {
  const { image, title, price } =  product;

  return (
    <>
      <li className="cart-item__container">
        <img src={image} alt={title} className="cart-item__image"/>
        <h4 className="cart-item__title">{title}</h4>
        <h4 className="cart-item__price">{price}$</h4>
        <h4 className="cart-item__buttons">
            <button 
            className="btn-count__decrease"
            disabled={count === 1}
            onClick={() => decrementCount(product)}>-</button>
            <span className="count-value">{count}</span>
            <button 
            className="btn-count__increase"
            onClick={() => incrementCount(product)}>+</button>
        </h4>
        <FaTimes className="icon__remove" onClick={() => removeFromCart(product)}/>
      </li>
    </>
  )
};
