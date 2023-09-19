import React from "react";
import { Nav, NavMenu } from "./NavBarElement";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Nav style={{ width: "100vw" }}>
        <NavMenu>
          <NavLink to="/" style={{ width: "8vw", textDecoration: "none" }}>
            Home
          </NavLink>

          <NavLink to="/about" style={{ width: "8vw", textDecoration: "none" }}>
            About
          </NavLink>

          <NavLink to="/work" style={{ width: "8vw", textDecoration: "none" }}>
            Work
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
