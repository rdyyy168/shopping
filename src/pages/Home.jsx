import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home({ addToCart, cartCount}) {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
    
  }, []);

  // Filter products based on the search query
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
   // Handle search input change
   const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

    return (
        <>
  <title>Ashion | Template</title>
  {/* Google Font */}
  <link
    href="https://fonts.googleapis.com/css2?family=Cookie&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
  {/* Offcanvas Menu Begin */}
  <div className="offcanvas-menu-overlay" />
  <div className="offcanvas-menu-wrapper">
    <div className="offcanvas__close">+</div>
    <ul className="offcanvas__widget">
      <li>
        <span className="icon_search search-switch" />
      </li>
      <li>
        <a href="#">
          <span className="icon_heart_alt" />
          <div className="tip"></div>
        </a>
      </li>
      <li>
        <a href="#">
          <span className="icon_bag_alt" />
          <div className="tip"></div>
        </a>
      </li>
    </ul>
    <div className="offcanvas__logo">
      <a href="/home">
        <img src="./assets/img/logo.png" alt="" />
      </a>
    </div>
    <div id="mobile-menu-wrap" />
    <div className="offcanvas__auth">
      <a href="#">Login</a>
      <a href="#">Register</a>
    </div>
  </div>
  {/* Offcanvas Menu End */}
  {/* Header Section Begin */}
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
              <li className="active">
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="#">Pages</a>
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
  </header>
  {/* Header Section End */}
  {/* Categories Section Begin */}
  <section className="categories">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 p-0">
          <div
            className="categories__item categories__large__item set-bg"
            style={{ backgroundImage: "url('./assets/img/categories/category-1.jpg')" }}
              >
            <div className="categories__text">
              <h1>Women’s fashion</h1>
              <p>
                Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                incidid-unt labore edolore magna aliquapendisse ultrices
                gravida.
              </p>
              <a href="#">Shop now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 p-0">
              <div
                className="categories__item set-bg"
                style={{ backgroundImage: "url('./assets/img/categories/category-2.jpg')" }}
              >
                <div className="categories__text">
                  <h4>Men’s fashion</h4>
                  <p>358 items</p>
                  <a href="#">Shop now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 p-0">
              <div
                className="categories__item set-bg"
                style={{ backgroundImage: "url('./assets/img/categories/category-3.jpg')" }}
              >
                <div className="categories__text">
                  <h4>Kid’s fashion</h4>
                  <p>273 items</p>
                  <a href="#">Shop now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 p-0">
              <div
                className="categories__item set-bg"
                style={{ backgroundImage: "url('./assets/img/categories/category-4.jpg')" }}
              >
                <div className="categories__text">
                  <h4>Cosmetics</h4>
                  <p>159 items</p>
                  <a href="#">Shop now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 p-0">
              <div
                className="categories__item set-bg"
                style={{ backgroundImage: "url('./assets/img/categories/category-5.jpg')" }}
              >
                <div className="categories__text">
                  <h4>Accessories</h4>
                  <p>792 items</p>
                  <a href="#">Shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Categories Section End */}
  
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
  {/* Product Section Begin */}
  <div className="product-list">
      <h2>All Products</h2></div>
  <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </Link>
              <button onClick={() => addToCart(product)} className="add-to-cart-btn">
                Add To Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products found</p> // Message when no products match
        )}
      </div>
  {/* Product Section End */}
  {/* Discount Section Begin */}
  <section className="discount">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 p-0">
          <div className="discount__pic">
            <img src="./assets/img/discount.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6 p-0">
          <div className="discount__text">
            <div className="discount__text__title">
              <span>Discount</span>
              <h2>Summer 2019</h2>
              <h5>
                <span>Sale</span> 50%
              </h5>
            </div>
            <div className="discount__countdown" id="countdown-time">
              <div className="countdown__item">
                <span>22</span>
                <p>Days</p>
              </div>
              <div className="countdown__item">
                <span>18</span>
                <p>Hour</p>
              </div>
              <div className="countdown__item">
                <span>46</span>
                <p>Min</p>
              </div>
              <div className="countdown__item">
                <span>05</span>
                <p>Sec</p>
              </div>
            </div>
            <a href="#">Shop now</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Discount Section End */}
  {/* Services Section Begin */}
  <section className="services spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="services__item">
            <i className="fa fa-car" />
            <h6>Free Shipping</h6>
            <p>For all oder over $99</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="services__item">
            <i className="fa fa-money" />
            <h6>Money Back Guarantee</h6>
            <p>If good have Problems</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="services__item">
            <i className="fa fa-support" />
            <h6>Online Support 24/7</h6>
            <p>Dedicated support</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="services__item">
            <i className="fa fa-headphones" />
            <h6>Payment Secure</h6>
            <p>100% secure payment</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Services Section End */}
  {/* Instagram Begin */}
  <div className="instagram">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
          <div
            className="instagram__item set-bg"
            style={{ backgroundImage: "url('./assets/img/instagram/insta-1.jpg')" }}
          >
            <div className="instagram__text">
              <i className="fa fa-instagram" />
              <a href="#">@ ashion_shop</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
          <div
            className="instagram__item set-bg"
            style={{ backgroundImage: "url('./assets/img/instagram/insta-2.jpg')" }}
          >
            <div className="instagram__text">
              <i className="fa fa-instagram" />
              <a href="#">@ ashion_shop</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
          <div
            className="instagram__item set-bg"
            style={{ backgroundImage: "url('./assets/img/instagram/insta-3.jpg')" }}
          >
            <div className="instagram__text">
              <i className="fa fa-instagram" />
              <a href="#">@ ashion_shop</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
          <div
            className="instagram__item set-bg"
            style={{ backgroundImage: "url('./assets/img/instagram/insta-4.jpg')" }}
          >
            <div className="instagram__text">
              <i className="fa fa-instagram" />
              <a href="#">@ ashion_shop</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
          <div
            className="instagram__item set-bg"
            style={{ backgroundImage: "url('./assets/img/instagram/insta-5.jpg')" }}
          >
            <div className="instagram__text">
              <i className="fa fa-instagram" />
              <a href="#">@ ashion_shop</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
          <div
            className="instagram__item set-bg"
            style={{ backgroundImage: "url('./assets/img/instagram/insta-6.jpg')" }}
          >
            <div className="instagram__text">
              <i className="fa fa-instagram" />
              <a href="#">@ ashion_shop</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Instagram End */}
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
  {/* Js Plugins */}
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.magnific-popup.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/mixitup.min.js"></script>
    <script src="js/jquery.countdown.min.js"></script>
    <script src="js/jquery.slicknav.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/jquery.nicescroll.min.js"></script>
    <script src="js/main.js"></script>
</>

    );
  }
  
  export default Home;