/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize, faMinimize } from "@fortawesome/free-solid-svg-icons";
import User from "../../assets/image/User.svg";
import Icon from "../../assets/image/Icon.svg";
import "./navbar.css";

function Navbar({ ToggleSidebar }) {
  const [fullScreen, setFullScreen] = useState(true);
  const onScrollHide = useCallback(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("mainnavbar").style.top = "0";
      } else {
        document.getElementById("mainnavbar").style.top = "-90px";
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);
  useEffect(() => {
    window.addEventListener("load", onScrollHide);
    return () => window.removeEventListener("load", onScrollHide);
  }, [onScrollHide]);

  function toggleFullScreen() {
    const doc = window.document;
    const docEl = doc.documentElement;

    const requestFullScreen =
      docEl.requestFullscreen ||
      docEl.mozRequestFullScreen ||
      docEl.webkitRequestFullScreen ||
      docEl.msRequestFullscreen;
    const cancelFullScreen =
      doc.exitFullscreen ||
      doc.mozCancelFullScreen ||
      doc.webkitExitFullscreen ||
      doc.msExitFullscreen;

    if (
      !doc.fullscreenElement &&
      !doc.mozFullScreenElement &&
      !doc.webkitFullscreenElement &&
      !doc.msFullscreenElement
    ) {
      setFullScreen(false);
      requestFullScreen.call(docEl);
    } else {
      setFullScreen(true);
      cancelFullScreen.call(doc);
    }
  }

  return (
    <>
      <nav
        id="mainnavbar"
        className={`navbar navbar-expand bg-light navbar-light sticky-top px-4`}
      >
        <a href="" className="navbar-brand d-flex d-lg-none me-4">
          <img src={Icon} alt="Icon" className="w-2" />
        </a>
        <div
          className="sidebar-toggler flex-shrink-0 cursor-pointer"
          onClick={ToggleSidebar}
        >
          <i className="fa fa-bars"></i>
        </div>
        <form className="d-none d-md-flex ms-4">
          <input
            className="form-control border-0"
            type="search"
            placeholder="Search"
          />
        </form>
        <div className="navbar-nav align-items-center ms-auto">
          <div className="nav-item dropdown">
            <a
              href=""
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i className="fa fa-envelope me-lg-2"></i>
              <span className="d-none d-lg-inline-flex">Message</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
              <a href="#" className="dropdown-item">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle w-h-4" src={User} alt="User" />
                  <div className="ms-2">
                    <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                    <small>15 minutes ago</small>
                  </div>
                </div>
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle w-h-4" src={User} alt="User" />
                  <div className="ms-2">
                    <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                    <small>15 minutes ago</small>
                  </div>
                </div>
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle w-h-4" src={User} alt="User" />
                  <div className="ms-2">
                    <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                    <small>15 minutes ago</small>
                  </div>
                </div>
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item text-center">
                See all message
              </a>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i className="fa fa-bell me-lg-2"></i>
              <span className="d-none d-lg-inline-flex">Notificatin</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
              <a href="#" className="dropdown-item">
                <h6 className="fw-normal mb-0">Profile updated</h6>
                <small>15 minutes ago</small>
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <h6 className="fw-normal mb-0">New user added</h6>
                <small>15 minutes ago</small>
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <h6 className="fw-normal mb-0">Password changed</h6>
                <small>15 minutes ago</small>
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item text-center">
                See all notifications
              </a>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <img
                className="rounded-circle me-lg-2 w-h-4"
                src={User}
                alt="User"
              />
              <span className="d-none d-lg-inline-flex">Jane Appleseed</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
              <a href="#" className="dropdown-item">
                My Profile
              </a>
              <a href="#" className="dropdown-item">
                Settings
              </a>
              <a href="#" className="dropdown-item">
                Log Out
              </a>
            </div>
          </div>
          <div className="full-screen ms-4 cursor-pointer">
            {fullScreen === true ? (
              <FontAwesomeIcon onClick={toggleFullScreen} icon={faMaximize} />
            ) : (
              <FontAwesomeIcon onClick={toggleFullScreen} icon={faMinimize} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
