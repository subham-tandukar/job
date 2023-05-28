import React, { useContext } from "react";
import { Link } from "react-router-dom";
import jobLogo from "../../images/jobLogo.png";
import JobContext from "../context/jobContext";

const Navbar = () => {
  const { logo, name } = useContext(JobContext);
  return (
    <>
      <header
        className="wrapper nav_bar"
        uk-sticky="top:300; animation: uk-animation-slide-top;"
      >
        <div className="uk-container">
          <div className="uk-flex uk-flex-between uk-flex-middle">
            <div
              className="logo uk-flex uk-flex-middle"
              style={{ flexGrow: "1" }}
            >
              <Link to="/">
                <img src={jobLogo} style={{ width: "70px" }} alt="logo" />
              </Link>
              <span
                className="uk-margin-left"
                style={{ fontWeight: "bold", color: "#000" }}
              >
                {name}
              </span>
            </div>

            <div>
              <Link to="/">
                <button className="uk-button home">Home</button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
