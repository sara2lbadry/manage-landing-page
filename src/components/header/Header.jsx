import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import intro from "../../assets/illustration-intro.svg";
import hamburger from "../../assets/icon-hamburger.svg";
import "./header.css";

function Header() {
  const [opened, setOpened] = useState(false)
  
  return (
    <section id="header">
      <div className="header_container container">
        <div className="nav_container" id={opened? "menu" : ""}>
          <a href="#">
            <img className="logo" src={logo} />
          </a>
          <button className="nav_toggle" onClick={()=> setOpened(!opened)}>
          <img className="icon_hamgurger" src={hamburger}/>
          <span className="hidden"></span>
        </button>
          <ul className="nav_list" role="list">
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
          <button className="button">Get Started</button>
        </div>
        <div className="main_header even_columns">
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
