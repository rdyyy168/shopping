import React from 'react'
import { Link } from 'react-router-dom';

function bdetail({cartCount}) {
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
              <li className='active'>
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
  {/* Blog Details Section Begin */}
  <section className="blog-details spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-8">
          <div className="blog__details__content">
            <div className="blog__details__item">
              <img src="./assets/img/blog/details/blog-details.jpg" alt="" />
              <div className="blog__details__item__title">
                <span className="tip">Street style</span>
                <h4>
                  Being seen: how is age diversity effecting change in fashion
                  and beauty?
                </h4>
                <ul>
                  <li>
                    by <span>Ema Timahe</span>
                  </li>
                  <li>Seb 17, 2019</li>
                  <li>39 Comments</li>
                </ul>
              </div>
            </div>
            <div className="blog__details__desc">
              <p>
                Afashion season can be defined as much by the people on the
                catwalk as it can by the clothes they are wearing. This time
                around, a key moment came at the end of Marc Jacobs’ New York
                show, when an almost makeup-free Christy Turlington made a rare
                return to the catwalk, aged 50 (she also stars, with the
                designer himself, in the label’s AW ad campaign), where the
                average catwalk model is around 18.
              </p>
              <p>
                A few days later, Simone Rocha arguably upped the ante. The
                32-year-old’s show – in part inspired by Louise Bourgeois, who
                lived until she was 98 – featured models in their 30s and 40s,
                including cult favourite Jeny Howorth and actor Chloë Sevigny.
              </p>
            </div>
            <div className="blog__details__quote">
              <div className="icon">
                <i className="fa fa-quote-left" />
              </div>
              <p>
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            </div>
            <div className="blog__details__desc">
              <p>
                Occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate.
              </p>
            </div>
            <div className="blog__details__tags">
              <a href="#">Fashion</a>
              <a href="#">Street style</a>
              <a href="#">Diversity</a>
              <a href="#">Beauty</a>
            </div>
            <div className="blog__details__btns">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="blog__details__btn__item">
                    <h6>
                      <a href="#">
                        <i className="fa fa-angle-left" /> Previous posts
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="blog__details__btn__item blog__details__btn__item--next">
                    <h6>
                      <a href="#">
                        Next posts <i className="fa fa-angle-right" />
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog__details__comment">
              <h5>3 Comment</h5>
              <a href="#" className="leave-btn">
                Leave a comment
              </a>
              <div className="blog__comment__item">
                <div className="blog__comment__item__pic">
                  <img src="./assets/img/blog/details/comment-1.jpg" alt="" />
                </div>
                <div className="blog__comment__item__text">
                  <h6>Brandon Kelley</h6>
                  <p>
                    Duis voluptatum. Id vis consequat consetetur dissentiet,
                    ceteros commune perpetua mei et. Simul viderer facilisis
                    egimus tractatos splendi.
                  </p>
                  <ul>
                    <li>
                      <i className="fa fa-clock-o" /> Seb 17, 2019
                    </li>
                    <li>
                      <i className="fa fa-heart-o" /> 12
                    </li>
                    <li>
                      <i className="fa fa-share" /> 1
                    </li>
                  </ul>
                </div>
              </div>
              <div className="blog__comment__item blog__comment__item--reply">
                <div className="blog__comment__item__pic">
                  <img src="./assets/img/blog/details/comment-2.jpg" alt="" />
                </div>
                <div className="blog__comment__item__text">
                  <h6>Brandon Kelley</h6>
                  <p>
                    Consequat consetetur dissentiet, ceteros commune perpetua
                    mei et. Simul viderer facilisis egimus ulla mcorper.
                  </p>
                  <ul>
                    <li>
                      <i className="fa fa-clock-o" /> Seb 17, 2019
                    </li>
                    <li>
                      <i className="fa fa-heart-o" /> 12
                    </li>
                    <li>
                      <i className="fa fa-share" /> 1
                    </li>
                  </ul>
                </div>
              </div>
              <div className="blog__comment__item">
                <div className="blog__comment__item__pic">
                  <img src="./assets/img/blog/details/comment-3.jpg" alt="" />
                </div>
                <div className="blog__comment__item__text">
                  <h6>Brandon Kelley</h6>
                  <p>
                    Duis voluptatum. Id vis consequat consetetur dissentiet,
                    ceteros commune perpetua mei et. Simul viderer facilisis
                    egimus tractatos splendi.
                  </p>
                  <ul>
                    <li>
                      <i className="fa fa-clock-o" /> Seb 17, 2019
                    </li>
                    <li>
                      <i className="fa fa-heart-o" /> 12
                    </li>
                    <li>
                      <i className="fa fa-share" /> 1
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="blog__sidebar">
            <div className="blog__sidebar__item">
              <div className="section-title">
                <h4>Categories</h4>
              </div>
              <ul>
                <li>
                  <a href="#">
                    All <span>(250)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Fashion week <span>(80)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Street style <span>(75)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Lifestyle <span>(35)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Beauty <span>(60)</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="blog__sidebar__item">
              <div className="section-title">
                <h4>Feature posts</h4>
              </div>
              <a href="#" className="blog__feature__item">
                <div className="blog__feature__item__pic">
                  <img src="./assets/img/blog/sidebar/fp-1.jpg" alt="" />
                </div>
                <div className="blog__feature__item__text">
                  <h6>Amf Cannes Red Carpet Celebrities Kend...</h6>
                  <span>Seb 17, 2019</span>
                </div>
              </a>
              <a href="#" className="blog__feature__item">
                <div className="blog__feature__item__pic">
                  <img src="./assets/img/blog/sidebar/fp-2.jpg" alt="" />
                </div>
                <div className="blog__feature__item__text">
                  <h6>Amf Cannes Red Carpet Celebrities Kend...</h6>
                  <span>Seb 17, 2019</span>
                </div>
              </a>
              <a href="#" className="blog__feature__item">
                <div className="blog__feature__item__pic">
                  <img src="./assets/img/blog/sidebar/fp-3.jpg" alt="" />
                </div>
                <div className="blog__feature__item__text">
                  <h6>Amf Cannes Red Carpet Celebrities Kend...</h6>
                  <span>Seb 17, 2019</span>
                </div>
              </a>
            </div>
            <div className="blog__sidebar__item">
              <div className="section-title">
                <h4>Tags cloud</h4>
              </div>
              <div className="blog__sidebar__tags">
                <a href="#">Fashion</a>
                <a href="#">Street style</a>
                <a href="#">Diversity</a>
                <a href="#">Beauty</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog Details Section End */}
  {/* Instagram Begin */}
  <div className="instagram">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-4 col-sm-4 col-md-6 col-sm-6 p-0">
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
        <div className="col-lg-2 col-md-4 col-sm-4 col-md-6 col-sm-6 p-0">
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
        <div className="col-lg-2 col-md-4 col-sm-4 col-md-6 col-sm-6 p-0">
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
        <div className="col-lg-2 col-md-4 col-sm-4 col-md-6 col-sm-6 p-0">
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
        <div className="col-lg-2 col-md-4 col-sm-4 col-md-6 col-sm-6 p-0">
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
        <div className="col-lg-2 col-md-4 col-sm-4 col-md-6 col-sm-6 p-0">
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

export default bdetail;

