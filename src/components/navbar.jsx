import React, { Component } from "react";
import Appbar from 'muicss/lib/react/appbar';
const NavBar = ({ totalCounters }) => {
  return (
    // <nav className="navbar navbar-light bg-light">
    <Appbar className="mui--appbar-height">
      <a className="App-header" href="\">
        React Bookstore
      </a>
      <a className="navbar-brand" href="#">
        Total Count:{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </Appbar>
    // </nav>
  );
};

export default NavBar;
