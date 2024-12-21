import React from 'react'
import { Link } from 'react-router-dom';

function Contact({cartCount}) {
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
                    <a href="/'product">Product Details</a>
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
              <li className='active'>
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
  {/* Contact Section Begin */}
  <section className="contact spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="contact__content">
            <div className="contact__address">
              <h5>Contact info</h5>
              <ul>
                <li>
                  <h6>
                    <i className="fa fa-map-marker" /> Address
                  </h6>
                  <p>
                    160 Pennsylvania Ave NW, Washington, Castle, PA 16101-5161
                  </p>
                </li>
                <li>
                  <h6>
                    <i className="fa fa-phone" /> Phone
                  </h6>
                  <p>
                    <span>125-711-811</span>
                    <span>125-668-886</span>
                  </p>
                </li>
                <li>
                  <h6>
                    <i className="fa fa-headphones" /> Support
                  </h6>
                  <p>Support.photography@gmail.com</p>
                </li>
              </ul>
            </div>
            <div className="contact__form">
              <h5>SEND MESSAGE</h5>
              <form action="#">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Website" />
                <textarea placeholder="Message" defaultValue={""} />
                <button type="submit" className="site-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="contact__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48158.305462977965!2d-74.13283844036356!3d41.02757295168286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e440473470d7%3A0xcaf503ca2ee57958!2sSaddle%20River%2C%20NJ%2007458%2C%20USA!5e0!3m2!1sen!2sbd!4v1575917275626!5m2!1sen!2sbd"
              height={780}
              style={{ border: 0 }}
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Contact Section End */}
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

export default Contact;
