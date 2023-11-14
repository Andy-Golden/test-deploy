import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import Logo from "@assets/images/5place2live.png";
import { SelectLanguage } from "@common";
import { Button } from "@components";

import "./styles.scss";

const NavbarLayout = (): JSX.Element => {
  const [user] = useState(false);

  return (
    <div className="container">
      <nav className="navbar-layout">
        <div className="left-side">
          {" "}
          <div className="logo">
            <img src={Logo} alt="5place2live" />
          </div>
          <div className="left-side__menu">
            <ul className="options">
              <li className="option">
                <Link to="/">Home</Link>
              </li>
              <li className="option">
                <Link to="/">Management</Link>
              </li>
              <li className="option">
                <Link to="/">Create post</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-side">
          <div className="right-side__menu">
            {user && (
              <>
                {" "}
                <Button type="button">
                  <Link to="/signIn">Sign In</Link>
                </Button>
                <Button type="button">
                  <Link to="/signUp">Sign Up</Link>
                </Button>
              </>
            )}
            {!user && (
              <div className="btn-profile">
                <i className="fas fa-user"></i>
                <span>Profile</span>
                <i className="fas fa-angle-down"></i>
                <ul className="btn-profile__dropdown">
                  <li className="dropdown-option">Message</li>
                  <li className="dropdown-option">Info</li>
                  <li className="dropdown-option">Sign out</li>
                </ul>
              </div>
            )}
            <SelectLanguage />
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export { NavbarLayout };
