import React from 'react';
import { Link } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function Cart({ cartItems, removeFromCart, updateQuantity, cartCount}) {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const totalAmount = calculateTotal();

  return (
    <header className="header">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-3 col-lg-2">
          <div className="header__logo">
            <a href="/home">
              <img src="./assets/img/logo.png" alt="" />
            </a>
          </div>
        </div>
        <div className="col-xl-6 col-lg-7">
          <nav className="header__menu">
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a  className="active" href="#">Pages</a>
                <ul className="dropdown">
                  <li>
                    <a href="/product">Product Details</a>
                  </li>
                  <li>
                    <a href="/cart">Shop Cart</a>
                  </li>
                  <li>
                    <a href="/checkout">Checkout</a>
                  </li>
                  <li>
                    <a href="/bdetail">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-3">
          <div className="header__right">
            <div className="header__right__auth">
              <a href="#">Login</a>
              <a href="#">Register</a>
            </div>
            <ul className="header__right__widget">
              <li>
                <span className="icon_search search-switch" />
              </li>
              <li>
                <a href="#">
                  <span className="icon_heart_alt" />
                  <div className="tip">0</div>
                </a>
              </li>
              <li>
                    <Link to="/cart">
                      <span className="icon_bag_alt" />
                      <div className="tip">{cartCount}</div>
                    </Link>
                  </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="canvas__open">
        <i className="fa fa-bars" />
      </div>
    </div>
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>${item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <label>Quantity:</label>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => updateQuantity(item.id, e.target.value)}
                  />
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove-item-btn">
                  Remove
                </button>
              </div>
              <p className="item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Cart Total: ${totalAmount}</h3>
          <PayPalScriptProvider options={{ "client-id": "AaOhy6bojEK_gRFK0CPauw60XCOeML6vCC9-fC7CjeHlVsXTT4ai5kDdftNhym6sBgzDGL-u93gtQtBl" }}>
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: totalAmount,
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  alert("Transaction completed by " + details.payer.name.given_name);
                });
              }}
            />
          </PayPalScriptProvider>
        </div>
      )}
    </div>
    </header>
  );
}

export default Cart;