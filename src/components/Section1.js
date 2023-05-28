import React from "react";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay, FaYoutube } from "react-icons/fa";
import img1 from "../images/img1.png";

const Section1 = () => {
  return (
    <>
      <section className="uk-container uk-section section-1">
        <div className="uk-grid uk-flex-middle uk-child-width-1-2@m">
          <div>
            <img src={img1} alt="" />
          </div>

          <div>
            <h5>download & enjoy</h5>
            <h2>Unlock elite job opportunities with us.</h2>
            <p>
              Search through millions of jobs and find the right fit. Simply
              swipe right to apply.
            </p>

            <div className="download-btn">
              <button className="uk-button">
                <a
                  href="https://play.google.com/store/apps/details?id=com.eliteinfotech.eliteoffice"
                  target="_blank"
                >
                  <div>
                    <AiFillApple size="2rem" />
                  </div>
                  <div className="uk-text-left">
                    Download on the <span>Apple Store</span>
                  </div>
                </a>
              </button>
              <button className="uk-button">
                <a
                  href="https://play.google.com/store/apps/details?id=com.eliteinfotech.eliteoffice"
                  target="_blank"
                >
                  <div>
                    <FaGooglePlay size="1.5rem" />
                  </div>
                  <div className="uk-text-left">
                    Get it on <span>Google Play</span>
                  </div>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;