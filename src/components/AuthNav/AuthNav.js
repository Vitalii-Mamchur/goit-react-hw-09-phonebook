import React from "react";
import { NavLink } from "react-router-dom";

const AuthNav = () => (
  <div>
    <ul className="Navbar">
      <li>
        <NavLink
          to="/register"
          exact
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Create account
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          exact
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Login
        </NavLink>
      </li>
    </ul>
  </div>
);

export default AuthNav;
