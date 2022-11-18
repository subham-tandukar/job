import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../img/logo.png";
import $ from "jquery";

$(function () {
  $(".dropdown-list").click(function () {
    $("#dropdown-active").addClass("active");
  });
  $(".non-active").click(function () {
    $("#dropdown-active").removeClass("active");
  });
});
const Sidebar = () => {
  return (
    <>
      <div className="brand">
        <h3>
          <img src={logo} alt="" />
        </h3>
        <span className="logo">Shree Sundevi</span>
      </div>

      <ul className="uk-list uk-margin-remove-top">
        <li>
          <NavLink to="/" className="list non-active">
            <i className="fas fa-tachometer-alt"></i>
            <span className="list-name">Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/project" className="list non-active">
            <i className="fas fa-tachometer-alt"></i>
            <span className="list-name ">My Project</span>
          </NavLink>
        </li>

        <li>
          <ul
            uk-accordion="true"
            className="uk-padding-remove uk-margin-remove"
          >
            <li style={{ borderBottom: "none" }}>
              <Link
                to="#"
                className="uk-accordion-title list"
                id="dropdown-active"
              >
                <i className="fas fa-tachometer-alt"></i>
                <span className="list-name">My Task</span>
                <span className="list-name dropicon uk-margin-remove">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </Link>
              <div className="uk-accordion-content uk-margin-remove-top uk-hidden">
                <ul className="uk-nav uk-dropdown-nav">
                  <li style={{ borderBottom: "none", borderTop: "none" }}>
                    <Link to="/task1" className="dropdown-list">
                      Dropdown1
                    </Link>
                  </li>
                  <li style={{ borderBottom: "none" }}>
                    <Link to="/task2" className="dropdown-list">
                      Dropdown2
                    </Link>
                  </li>
                  <li style={{ borderBottom: "none" }}>
                    <Link to="/task3" className="dropdown-list">
                      Dropdown3
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>

        <li>
          <NavLink to="/wallet" className="list non-active">
            <i className="fas fa-tachometer-alt"></i>
            <span className="list-name">My Wallet</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/data" className="list non-active">
            <i className="fas fa-tachometer-alt"></i>
            <span className="list-name">History Data</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/invoice" className="list non-active">
            <i className="fas fa-tachometer-alt"></i>
            <span className="list-name">Invoice</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/help" className="list non-active">
            <i className="fas fa-tachometer-alt"></i>
            <span className="list-name">Helps</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
