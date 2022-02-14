/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useState } from "react";
import { sideBarData } from "../../utils/constant";
import { Link, useLocation } from "react-router-dom";
import User from "../../assets/image/User.svg";
import logo from "../../assets/image/Logo.svg";
import "./sidebar.css";

function SideBar({ isOpen, ToggleSidebar }) {
  const location = useLocation();
  const [path, setPath] = useState();

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const isPathCorrect = (pathname) => path === pathname;
  return (
    <>
      {/* <!-- Sidebar Start --> */}
      <div
        className={`page_sidebar pe-4 pb-3 ${isOpen === true ? "actives" : ""}`}
      >
        <div className="navbar">
          <div className="navvar-brand mx-4 mb-3">
            <img src={logo} className="w-8" alt="logo" />
          </div>
          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              <img className="rounded-circle w-h-4" src={User} alt="User" />
              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
            </div>
            <div className="ms-3 text-start">
              <h6 className="mb-0">Jane Appleseed</h6>
              <span>Admin</span>
            </div>
          </div>

          <div className="navbar-nav w-100 ">
            {sideBarData.map((item, index) => {
              return !item?.isDropDown ? (
                <Link
                  key={item.title}
                  onClick={isOpen === true ? ToggleSidebar : ""}
                  to={item.to}
                  className={`nav-item nav-link ${
                    isPathCorrect(item.to) && "active"
                  }`}
                >
                  {item.icon}
                  {item.title}
                </Link>
              ) : (
                <div className="nav-item dropdown" key={item.title}>
                  <a
                    href="/#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    {item.icon}
                    {item.title}
                  </a>
                  <div className="dropdown-menu bg-transparent border-0">
                    {item.items.map((data, index) => {
                      return (
                        <Fragment key={data.title}>
                          <Link
                            to={data.to}
                            className="dropdown-item"
                            onClick={isOpen === true ? ToggleSidebar : ""}
                          >
                            {data.title}
                          </Link>
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <!-- Sidebar End --> */}
    </>
  );
}
export default SideBar;
