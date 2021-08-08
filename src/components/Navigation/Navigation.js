import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import "./Navigation.css";

function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <nav>
      <ul className="Navbar">
        <li>
          <NavLink
            exact
            to={routes.home}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </li>
        {isAuthenticated && (
          <li>
            <NavLink
              to={routes.contacts}
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
