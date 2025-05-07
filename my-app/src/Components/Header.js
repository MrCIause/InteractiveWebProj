import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import Logo_Dark from "../Assets/LogoDark.png";
import SearchIconWhite from "../Assets/search-w.png";

export default function Header() {
  return (
    <header>
      <div className="navbar">
        <div className="img-div">
          <Link className="nav-item" to="/">
            <img src={Logo_Dark} alt="logo/home" className="logo" />
          </Link>
        </div>

        <div className="list-div">
          <ul className="list">
            <li>
              <Link className="nav-item" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/Vehicles">
                Vehicles
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/">
                Products
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/">
                Features
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/">
                ContactUs
              </Link>
            </li>
          </ul>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <img src={SearchIconWhite} alt="" />
        </div>
      </div>
    </header>
  );
}
