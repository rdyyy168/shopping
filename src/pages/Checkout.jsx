import React from 'react'

function Checkout() {
  return (
    <div>
      {/* Header Section Begin */}
  <header className="header">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-3 col-lg-2">
          <div className="header__logo">
            <a href="/home">
              <img src="img/logo.png" alt="" />
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
              <li className="active">
                <a href="#">Pages</a>
                <ul className="dropdown">
                  <li>
                    <a href="/product">Product Details</a>
                  </li>
                  <li>
                    <a href="/shop">Shop Cart</a>
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
                  <div className="tip">2</div>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon_bag_alt" />
                  <div className="tip">2</div>
                </a>
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
  {/* Checkout Section Begin */}
  <section className="checkout spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h6 className="coupon__link">
            <span className="icon_tag_alt" /> <a href="#">Have a coupon?</a>{" "}
            Click here to enter your code.
          </h6>
        </div>
      </div>
      <form action="#" className="checkout__form">
        <div className="row">
          <div className="col-lg-8">
            <h5>Billing detail</h5>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="checkout__form__input">
                  <p>
                    First Name <span>*</span>
                  </p>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="checkout__form__input">
                  <p>
                    Last Name <span>*</span>
                  </p>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="checkout__form__input">
                  <p>
                    Country <span>*</span>
                  </p>
                  <input type="text" />
                </div>
                <div className="checkout__form__input">
                  <p>
                    Address <span>*</span>
                  </p>
                  <input type="text" placeholder="Street Address" />
                  <input
                    type="text"
                    placeholder="Apartment. suite, unite ect ( optinal )"
                  />
                </div>
                <div className="checkout__form__input">
                  <p>
                    Town/City <span>*</span>
                  </p>
                  <input type="text" />
                </div>
                <div className="checkout__form__input">
                  <p>
                    Country/State <span>*</span>
                  </p>
                  <input type="text" />
                </div>
                <div className="checkout__form__input">
                  <p>
                    Postcode/Zip <span>*</span>
                  </p>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="checkout__form__input">
                  <p>
                    Phone <span>*</span>
                  </p>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="checkout__form__input">
                  <p>
                    Email <span>*</span>
                  </p>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="checkout__form__checkbox">
                  <label htmlFor="acc">
                    Create an acount?
                    <input type="checkbox" id="acc" />
                    <span className="checkmark" />
                  </label>
                  <p>
                    Create am acount by entering the information below. If you
                    are a returing customer login at the <br />
                    top of the page
                  </p>
                </div>
                <div className="checkout__form__input">
                  <p>
                    Account Password <span>*</span>
                  </p>
                  <input type="text" />
                </div>
                <div className="checkout__form__checkbox">
                  <label htmlFor="note">
                    Note about your order, e.g, special noe for delivery
                    <input type="checkbox" id="note" />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="checkout__form__input">
                  <p>
                    Oder notes <span>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Note about your order, e.g, special noe for delivery"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="checkout__order">
              <h5>Your order</h5>
              <div className="checkout__order__product">
                <ul>
                  <li>
                    <span className="top__text">Product</span>
                    <span className="top__text__right">Total</span>
                  </li>
                  <li>
                    01. Chain buck bag <span>$ 300.0</span>
                  </li>
                  <li>
                    02. Zip-pockets pebbled
                    <br /> tote briefcase <span>$ 170.0</span>
                  </li>
                  <li>
                    03. Black jean <span>$ 170.0</span>
                  </li>
                  <li>
                    04. Cotton shirt <span>$ 110.0</span>
                  </li>
                </ul>
              </div>
              <div className="checkout__order__total">
                <ul>
                  <li>
                    Subtotal <span>$ 750.0</span>
                  </li>
                  <li>
                    Total <span>$ 750.0</span>
                  </li>
                </ul>
              </div>
              <div className="checkout__order__widget">
                <label htmlFor="o-acc">
                  Create an acount?
                  <input type="checkbox" id="o-acc" />
                  <span className="checkmark" />
                </label>
                <p>
                  Create am acount by entering the information below. If you are
                  a returing customer login at the top of the page.
                </p>
                <label htmlFor="check-payment">
                  Cheque payment
                  <input type="checkbox" id="check-payment" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="paypal">
                  PayPal
                  <input type="checkbox" id="paypal" />
                  <span className="checkmark" />
                </label>
              </div>
              <button type="submit" className="site-btn">
                Place oder
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
  {/* Checkout Section End */}
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
                <img src="assets/img/logo.png" alt="" />
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt cilisis.
            </p>
            <div className="footer__payment">
              <a href="#">
                <img src="assets/img/payment/payment-1.png" alt="" />
              </a>
              <a href="#">
                <img src="assets/img/payment/payment-2.png" alt="" />
              </a>
              <a href="#">
                <img src="assets/img/payment/payment-3.png" alt="" />
              </a>
              <a href="#">
                <img src="assets/img/payment/payment-4.png" alt="" />
              </a>
              <a href="#">
                <img src="assets/img/payment/payment-5.png" alt="" />
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
  )
}

export default Checkout
