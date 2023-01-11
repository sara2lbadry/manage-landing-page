import React from "react";
import logo from "../../assets/logo.svg";
import intro from "../../assets/illustration-intro.svg";

function Header() {
  return (
    <section id="header">
      <div className="header_container container">
        <a href="#">
          <img src={logo} />
        </a>
        <div className="nav_container">
          <ul className="nav_list" role="list">
            <il>
              <a href="#">Pricing</a>
            </il>
            <il>
              <a href="#">Product</a>
            </il>
            <il>
              <a href="#">About Us</a>
            </il>
            <il>
              <a href="#">Careers</a>
            </il>
            <il>
              <a href="#">Comunity</a>
            </il>
          </ul>
        </div>
        <button className="button">Get Started</button>
        <div className="main_header">
          <div className="header_text">
            <h1 className="header_title">
              Bring everyone together to build better products.
            </h1>
            <p>
              Manage makes it simple for software teams to plan day-by-day tasks
              while keeping the larger team goals in view.
            </p>
            <button className="button"></button>
          </div>
          <div>
            <img src={intro} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
