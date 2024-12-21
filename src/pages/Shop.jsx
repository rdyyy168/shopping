import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Shop({ addToCart, cartCount }) {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch products on component mount
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
      
  }, []);

  // Filter products based on the search query
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-2">
              <div className="header__logo">
                <Link to="/home">
                  <img src="./assets/img/logo.png" alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <nav className="header__menu">
                <ul>
                  <li><Link to="/home">Home</Link></li>
                  <li className="active"><Link to="/shop">Shop</Link></li>
                  <li>
                    <Link to="#">Pages</Link>
                    <ul className="dropdown">
                      <li><Link to="/product">Product Details</Link></li>
                      <li><Link to="/cart">Shop Cart</Link></li>
                      <li><Link to="/checkout">Checkout</Link></li>
                      <li><Link to="/bdetail">Blog Details</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__right">
                <div className="header__right__auth">
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </div>
                <ul className="header__right__widget">
                  <li><span className="icon_search search-switch" /></li>
                  <li>
                    <Link to="#">
                      <span className="icon_heart_alt" />
                      <div className="tip">0</div>
                    </Link>
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
        </div>
      </header>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Product List */}
      <div className="product-list">
        <h2>All Products</h2>
        <div className="products">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <Link to={`/products/${product.id}`}>
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                </Link>
                <button
                  onClick={() => addToCart(product)}
                  className="add-to-cart-btn"
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <p>© 2024 Shop. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
        {/* Footer Section Begin */}
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-7">
          <div className="footer__about">
            <div className="footer__logo">
              <a href="/home">
                <img src="./assets/img/logo.png" alt="" />
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt cilisis.
            </p>
            <div className="footer__payment">
              <a href="#">
                <img src="./asset/img/payment/payment-1.png" alt="" />
              </a>
              <a href="#">
                <img src="./assets/img/payment/payment-2.png" alt="" />
              </a>
              <a href="#">
                <img src="./assets/img/payment/payment-3.png" alt="" />
              </a>
              <a href="#">
                <img src="./assets/img/payment/payment-4.png" alt="" />
              </a>
              <a href="#">
                <img src="./assets/img/payment/payment-5.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-5">
          <div className="footer__widget">
            <h6>Quick links</h6>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4">
          <div className="footer__widget">
            <h6>Account</h6>
            <ul>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Orders Tracking</a>
              </li>
              <li>
                <a href="#">Checkout</a>
              </li>
              <li>
                <a href="#">Wishlist</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-8 col-sm-8">
          <div className="footer__newslatter">
            <h6>NEWSLETTER</h6>
            <form action="#">
              <input type="text" placeholder="Email" />
              <button type="submit" className="site-btn">
                Subscribe
              </button>
            </form>
            <div className="footer__social">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-youtube-play" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
              <a href="#">
                <i className="fa fa-pinterest" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          <div className="footer__copyright__text">
            <p>
              Copyright © All rights reserved | This template is made with{" "}
              <i className="fa fa-heart" aria-hidden="true" /> by{" "}
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
            </p>
          </div>
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
        </div>
      </div>
    </div>
  </footer>
  {/* Footer Section End */}
  {/* Search Begin */}
  <div className="search-model">
    <div className="h-100 d-flex align-items-center justify-content-center">
      <div className="search-close-switch">+</div>
      <form className="search-model-form">
        <input type="text" id="search-input" placeholder="Search here....." />
      </form>
    </div>
  </div>
  {/* Search End */}
    </div>
  );
}

export default Shop;
