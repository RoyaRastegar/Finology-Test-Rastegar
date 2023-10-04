import React from "react";
import "./Navbar.css";
const Navbar = ({ children }) => {
  return <nav className="nav-bar">{children}</nav>;
};

export default Navbar;
