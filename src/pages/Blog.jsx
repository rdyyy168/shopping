import React from 'react'
import { Link } from 'react-router-dom';

function Blog({cartCount}) {
  return (
    <div>
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
              <li>
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
              <li className='active'>
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
  <section className="blog spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="blog__item">
            <div
              className="blog__item__pic large__item set-bg"
              style={{ backgroundImage: "url('./assets/img/blog/blog-1.jpg')" }}
            />
            <div className="blog__item__text">
              <h6>
                <a href="#">
                  No Bad Blood! The Reason Why Tamr Judge Finally Made Up
                  With...
                </a>
              </h6>
              <ul>
                <li>
                  by <span>Ema Timahe</span>
                </li>
                <li>Seb 17, 2019</li>
              </ul>
            </div>
          </div>
          <div className="blog__item">
            <div
              className="blog__item__pic set-bg"
              style={{ backgroundImage: "url('./assets/img/blog/blog-7.jpg')" }}
            />
            <div className="blog__item__text">
              <h6>
                <a href="#">
                  Pot Party! See Farrah Abraham Flaunt Smoking Body At...
                </a>
              </h6>
              <ul>
                <li>
                  by <span>Ema Timahe</span>
                </li>
                <li>Seb 17, 2019</li>
              </ul>
            </div>
          </div>
          <div className="blog__item">
            <div
              className="blog__item__pic set-bg"
              style={{ backgroundImage: "url('./assets/img/blog/blog-9.jpg')" }}
            />
            <div className="blog__item__text">
              <h6>
                <a href="#">
                  CMT Awards 2019 Red Carpet Arrivals Carrie Underwood,
                  Sheryl...
                </a>
              </h6>
              <ul>
                <li>
                  by <span>Ema Timahe</span>
                </li>
                <li>Seb 17, 2019</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="blog__item">
            <div
              className="blog__item__pic set-bg"
              style={{ backgroundImage: "url('./assets/img/blog/blog-2.jpg')" }}
            />
            <div className="blog__item__text">
              <h6>
                <a href="#">
                  Amf Cannes Red Carpet Celebrities Kendall Jenner, Pamela...
                </a>
              </h6>
              <ul>
                <li>
                  by <span>Ema Timahe</span>
                </li>
                <li>Seb 17, 2019</li>
              </ul>
            </div>
          </div>
          <div className="blog__item">
            <div
              className="blog__item__pic set-bg"
              style={{ backgroundImage: "url('./assets/img/blog/blog-4.jpg')" }}
            />
            <div className="blog__item__text">
              <h6>
                <a href="#">
                  Ireland Baldwin Shows Off Trendy Ilse Valfre Tattoo At
                  Stagecoach...
                </a>
              </h6>
              <ul>
                <li>
                  by <span>Ema Timahe</span>
                </li>
                <li>Seb 17, 2019</li>
              </ul>
            </div>
          </div>
          <div className="blog__item">
            <div
              className="blog__item__pic set-bg"
              style={{ backgroundImage: "url('./assets/img/blog/blog-8.jpg')" }}
            />
            <div className="blog__item__text">
              <h6>
                <a href="#">
                  Kim Kardashian Steps Out In Paris Wearing Shocking Sparkly...
                </a>
              </h6>
              <ul>
                <li>
                  by <span>Ema Timahe</span>
                </li>
                <li>Seb 17, 2019</li>
              </ul>
            </div>
          </div>
          <div className="blog__item">
            <div
              className="blog__item__pic set-bg"
              style={{ backgroundImage: "url('./assets/img/blog/blog-10.jpg')" }}
            />
            <div className="blog__item__text">
              <h6>
                <a href="#">
                  A-list Battle! Angelina Jolie &amp; Lady Gaga Fighting Over
                  Who...
                </a>
              </h6>
              <ul>
                <li>
                  by <span>Ema Timahe</span>
                </li>
                <li>Seb 17, 2019</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="blog__item">
            <div
              className="blog__item__pic set-bg"
              style={{ backgroundImage: "url('./assets/img/blog/blog-3.jpg')" }}
            />
            <div className="blog__item__text">
              <h6>
                <a href="#">
                  Gigi Hadid, Rita Ora, Serena &amp; Other Hot Celebs Stun At
                  2019...
                </a>
              </h6>
              <ul>
                <li>
                  by <span>Ema Timahe</span>
                </li>
                <li>Seb 17, 2019</li>
              </ul>
            </div>
          </div>
          <div className="blog__item">
            <div
              className="blog__item__pic set-bg"
              style={{ backgroundImage: "url('./assets/img/blog/blog-5.jpg')" }}
            />
            <div className="blog__item__text">
              <h6>
                <a href="#">
                  Billboard Music Awards: Best, Worst &amp; Wackiest Dresses On
                  The...
                </a>
              </h6>
              <ul>
                <li>
                  by <span>Ema Timahe</span>
                </li>
                <li>Seb 17, 2019</li>
              </ul>
            </div>
          </div>
          <div className="blog__item">
            <div
              className="blog__item__pic large__item set-bg"
              style={{ backgroundImage: "url('./assets/img/blog/blog-6.jpg')" }}
            />
            <div className="blog__item__text">
              <h6>
                <a href="#">
                  Stephanie Pratt Busts Out Of Teeny Black Bikini During
                  Hawaii...
                </a>
              </h6>
              <ul>
                <li>
                  by <span>Ema Timahe</span>
                </li>
                <li>Seb 17, 2019</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-12 text-center">
          <a href="#" className="primary-btn load-btn">
            Load more posts
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* Blog Section End */}
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

    </div>
  );
};

export default Blog;
