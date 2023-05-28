import React from "react";
import jobLogo from "../../images/jobLogo.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="uk-container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <img
                src={jobLogo}
                style={{ height: "50px" }}
                alt=""
                className="img-fluid"
              />

              <p>
                Kalimati,Kathmandu,Nepal <br />
                <strong>Phone:</strong> 9840921520 ,9808577620 <br />
                <strong>Email:</strong> easysoftwarenepal@gmail.com
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Featured Product</h4>
              <ul>
                <li>
                  <i class="fas fa-chevron-right"></i>{" "}
                  <a>Easy Cooperative Software</a>
                </li>
                <li>
                  <i class="fas fa-chevron-right"></i>{" "}
                  <a>Easy Accounting Software</a>
                </li>
                <li>
                  <i class="fas fa-chevron-right"></i>{" "}
                  <a>Easy School & College Software</a>
                </li>
                <li>
                  <i class="fas fa-chevron-right"></i>{" "}
                  <a>Easy Khanepani Software</a>
                </li>
              </ul>
            </div>

            <div
              className="col-lg-3 col-md-6 footer-links"
              data-aos-delay="200"
            >
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i class="fas fa-chevron-right"></i>{" "}
                  <a>Software Development</a>
                </li>
                <li>
                  <i class="fas fa-chevron-right"></i> <a>Web Development</a>
                </li>
                <li>
                  <i class="fas fa-chevron-right"></i>{" "}
                  <a>Mobile App Development</a>
                </li>
                <li>
                  <i class="fas fa-chevron-right"></i> <a>Digital Marketing</a>
                </li>
                <li>
                  <i class="fas fa-chevron-right"></i> <a>Graphic Design</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Join Us</h4>
              <p>
                Easy Software Pvt ltd aims to provide creative and easy software
                for companies and other association.
              </p>
              <div className="social-links mt-3">
                <a
                  target="_blank"
                  href="https://twitter.com/easysoftwarenp"
                  className="twitter"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/easysoftwarenp/"
                  className="facebook"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/easysoftwarenp/"
                  className="instagram"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/easysoftwarenp"
                  className="linkedin"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center py-4">
        <div className="copyright p-0">
          <span>
            Copyright &copy; 2023 By{" "}
            <a href="https://eliteinfotechnp.com/" target="_blank">
              Elite Infotech
            </a>
            | All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
