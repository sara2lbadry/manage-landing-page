import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

function Footer() {
  return (
    <section id="footer">
      <div className="footer_container container">
        <div className="footer_text">
          <div>
            <p>Simplify how your team works today.</p>
          </div>
          <div>
            <button className="button">Get Started</button>
          </div>
        </div>
        <div className="even_columns">
          <div className="socials">
            <img src={logo} />
            <ul className="socials_list">
              <li>
                <a aria-label="facebook"></a>
              </li>
              <li>
                <a aria-label="youtube"></a>
              </li>
              <li>
                <a aria-label="twitter"></a>
              </li>
              <li>
                <a aria-label="pinterest"></a>
              </li>
              <li>
                <a aria-label="instagram"></a>
              </li>
            </ul>
          </div>
          <div className="nav_links">
            <ul className="nav_list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Commuinty</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer_form">
            <form action="">
              <input type="email" />
              <button class="button" data-shadow="none">
                Go
              </button>
            </form>
            <p>Copyright 2020. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
