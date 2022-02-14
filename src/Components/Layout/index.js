import React, { useEffect, useState } from "react";
import Sidebar from "../Header/sidebar";
import Navbar from "../Navbar/navbar";
import Footer from "../Footers/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import "./layout.css";
import { useLocation } from "react-router-dom";
import linkedin from "../../assets/image/linkedin-brands.svg";
import facebook from "../../assets/image/facebook-square-brands.svg";
import github from "../../assets/image/github-brands.svg";
import instagram from "../../assets/image/instagram-brands.svg";
import twitter from "../../assets/image/twitter-square-brands.svg";
// import linkedin from '../../assets/image/linkedin-brands.svg';

function Layout(props) {
  const [isOpen, setIsopen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [spinner, setSpinner] = useState(true);

  const location = useLocation();

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  const ToggleSidebar = () => setIsopen(!isOpen);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  if (
    location.pathname === "/signin" ||
    location.pathname === "/signup" ||
    location.pathname === "/404" ||
    location.pathname === "/blankpage"
  ) {
    return <>{props.children}</>;
  }

  return (
    <>
      <div className="i2i-header d-flex justify-content-between">
        <a href="http://www.i2i-info.com/" className="text-white p-2">
          Developed by : Idea to Implementation Infotech
        </a>
        <div className="follow align-self-center">
          <a
            href="https://github.com/i2i-info/React-Admin-Panel.git"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/company/i2i-infotech"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://www.facebook.com/Idea.to.implementation.infotech"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href="https://twitter.com/i2i_infotech"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="twitter" />
          </a>
          <a
            href="https://www.instagram.com/i2i_infotech"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <div className="position-relative bg-white d-flex p-0">
        {/* <!-- Spinner Start --> */}

        <Sidebar isOpen={isOpen} ToggleSidebar={ToggleSidebar}></Sidebar>

        <div className={`content ${isOpen === true ? "active" : ""}`}>
          <Navbar ToggleSidebar={ToggleSidebar}></Navbar>
          {spinner ? (
            <div className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
              <div
                className="spinner-border text-primary"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <>{props.children}</>
          )}
          <Footer />
        </div>

        <FontAwesomeIcon
          className="scrollTop"
          icon={faArrowAltCircleUp}
          onClick={scrollTop}
          style={{ height: 40, display: showScroll ? "flex" : "none" }}
        />
      </div>
    </>
  );
}

export default Layout;
