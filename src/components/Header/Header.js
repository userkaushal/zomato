import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import iconsm from "../../logos/iconsm.svg"; // Path to your image
import ddown from "../../logos/ddown.svg";
import abc from "../../logos/search.svg";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="bg-hero">
          <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" />
          <div className="nav">
            <ul>
              <li>
                <Link to="/">Get the App</Link>
              </li>
              <li>
                <Link to="/">Investor Relations</Link>
              </li>
              <li>
                <Link to="/">Add restaurant</Link>
              </li>
              <li>
                <Link to="/">Log in</Link>
              </li>
              <li>
                <Link to="/">Sign up</Link>
              </li>
            </ul>
          </div>
          <div className="wrapper">
            <div className="logoimg">
              <img
                src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
                alt="zomato logo"
              />
            </div>
            <h1>
              Discover the best food & drinks in <span>Ahmedabad</span>
            </h1>
            <div className="searchcontainer">
              <div className="mergeddiv">
                <div className="left">
                  <div>
                    <i>
                      <img src={iconsm} alt="location" />
                    </i>
                    <input type="text" placeholder="Ahmedabad" />
                    <i className="ddown">
                      <img src={ddown} alt="location" />
                    </i>
                  </div>
                </div>
                <div className="indicate"></div>
                <div className="right">
                  <div>
                    <i>
                      <img src={abc} alt="search" />
                    </i>
                    <input
                      type="text"
                      placeholder="Search for restaurant, cuisine or a dish"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
