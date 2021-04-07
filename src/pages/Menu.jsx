import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaShoppingCart } from 'react-icons/fa';

import products from '../components/constants/products';
import Product from '../components/Product';
import Cart from '../components/Cart';
import Form from '../components/Form';
import sweetLunch from '../images/sweet-lunch.jpg';
import sweetCrepes from '../images/sweet-crepes.jpg';

import 'react-tabs/style/react-tabs.css';

export default function Menu() {
  const [cart, setCart] = useState([]);
  const [visible, setVisible] = useState(false);

  const addToCart = (el) => {
    const cartCopy = cart.slice();

    const index = cartCopy.findIndex((product) => el.id === product.id);

    if (index === -1) {
      cartCopy.push({ ...el, count: 1 });
    } else {
      const pr = cartCopy[index];
      cartCopy[index] = { ...pr, count: pr.count + 1 };
    }

    setCart(cartCopy);
  };

  const removeFromCart = (el) => {
    const cartCopy = cart.filter((product) => el.id !== product.id);
    setCart(cartCopy);
  };

  const incrementCount = (el) => {
    const cartCopy = cart.slice();

    const index = cartCopy.findIndex((product) => el.id === product.id);

    const pr = cartCopy[index];
    cartCopy[index] = { ...pr, count: pr.count + 1 };

    setCart(cartCopy);
  };

  const decrementCount = (el) => {
    const cartCopy = cart.slice();

    const index = cartCopy.findIndex((product) => el.id === product.id);

    const pr = cartCopy[index];
    cartCopy[index] = { ...pr, count: pr.count - 1 };

    setCart(cartCopy);
  };

  const getCartTotal = () =>
    cart.reduce((total, product) => total + product.price * product.count, 0);

  const getCartCount = () =>
    cart.reduce((total, product) => total + product.count, 0);

  const renderProduct = (product) => (
    <Product key={product.id} product={product} addToCart={addToCart} />
  );

  const burgerProducts = products
    .filter((product) => product.category === 'burger')
    .map(renderProduct);

  const crepeProducts = products
    .filter((product) => product.category === 'crepe')
    .map(renderProduct);

  return (
    <>
      <Tabs className="tabs-wrapper" id="menu">
        <TabList className="tabs">
          <Tab className="tab-item">Burgers</Tab>
          <Tab className="tab-item">Lunch of the day</Tab>
          <Tab className="tab-item">Crepes</Tab>
        </TabList>
        <TabPanel>
          <div className="burgers">
            <ul>{burgerProducts}</ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="lunch">
            <h4>Sweet lunch today!</h4>
            <span>7$</span>
            <p>
              You can choose one of our 3 sweet crepes + one of our 4 cold
              drinks!
              <br />
              Nutella crepe, Crepe with salted caramel and nuts or Oreo Bang
              crepe with whipped cream and raspberries.
              <br />
              For drink - one of our homemade lemonades - Melon, Orange or
              Lemon-Mint. Or a Frozen Coffee!
            </p>
            <div>
              <img src={sweetLunch} alt="Sweet crepe lunch" />
              <img src={sweetCrepes} alt="Sweet crepes lunch" />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="crepes">
            <ul>{crepeProducts}</ul>
          </div>
        </TabPanel>
      </Tabs>
      <div className="cart-icon__container">
        <span className="cart-items__quantity">{getCartCount()}</span>
        <button className="btn__cart" type="button">
          <FaShoppingCart
            className="cart-icon"
            onClick={() => setVisible(!visible)}
          />
        </button>
      </div>
      {visible && (
        <div className="cart__container">
          <div className="cart-items__container">
            {cart.map((el) => (
              <Cart
                key={el.id}
                product={el}
                count={el.count}
                removeFromCart={removeFromCart}
                incrementCount={incrementCount}
                decrementCount={decrementCount}
              />
            ))}
            <h4 className="cart__total">Total Price: {getCartTotal()}$</h4>
            <button
              type="button"
              className="btn__clear"
              onClick={() => setCart([])}
            >
              Clear cart
            </button>
          </div>
          <Form />
        </div>
      )}
    </>
  );
}
