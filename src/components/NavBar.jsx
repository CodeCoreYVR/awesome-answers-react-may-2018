import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => {
  return (
    <nav className="NavBar">
      {/* <a href="/">Welcome</a> */}
      <NavLink exact to="/">
        Welcome
      </NavLink>
      <NavLink exact to="/questions/new">
        New Question
      </NavLink>
      <NavLink exact to="/questions">
        Questions
      </NavLink>
    </nav>
  );
};

export default NavBar;
