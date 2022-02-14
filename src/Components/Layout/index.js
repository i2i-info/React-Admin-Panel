import React, { useEffect, useState } from "react";
import Sidebar from "../Header/sidebar";
import Navbar from "../Navbar/navbar";
import Footer from "../Footers/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import "./layout.css";
import { useLocation } from "react-router-dom";

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
      <div className="position-relative bg-white d-flex p-0">
        {/* <!-- Spinner Start --> */}

        <Sidebar
          isOpen={isOpen}
          ToggleSidebar={ToggleSidebar}
          
        ></Sidebar>

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
