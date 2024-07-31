import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Sidebar from "./Sidebar";
import CategoriesContainer from "../containers/categories/CategoriesContainer";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
    <header className="navbar">
      <div className="container">
        <div className="navbar__left">
          <Link to="/" className="navbar__logo mt-2">
            <h6>学習ガイド</h6>
          </Link>
        </div>
        <div class="col-md-5 mx-auto search">
          <div class="input-group">
            <input
              class="form-control border-end-0 border rounded-pill "
              type="search"
              // value="search"
              placeholder="Serach ..."
              id="example-search-input"
            />
            <span class="input-group-append">
              <button
                class="btn  bg-white border-bottom-0 border rounded-pill ms-n5"
                type="button"
              >
                <i class="bi bi-search"></i>
              </button>
            </span>
          </div>
        </div>
        <div className="navbar__right">
          <div className="btn-group me-3">
            <div data-bs-toggle="dropdown" aria-expanded="false">
              <FaUserCircle size={30} /> Admin
            </div>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/setting">Settings</Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="dropdown-item">
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
          {/* <div className="navbar__profile" onClick={toggleProfileDropdown}>
          <FaUserCircle size={30} />
        </div>
        {isProfileDropdownOpen && (
          <div className="profile-dropdown">
            <ul>
              <li></li>
              <li><Link to="/settings">Settings</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </ul>
          </div>
        )} */}
        </div>
        <button className="navbar__menu-btn" onClick={toggleSidebar}>
          &#9776; {/* Hamburger icon */}
        </button>
        {isSidebarOpen && (<>
          <div className="backdrop"></div>
          <div className="sidebar">
            <button className="sidebar__close-btn" onClick={toggleSidebar}>
              &times;
            </button>
            <ul>
              <li>
                <Link to="/">ホーム</Link>
              </li>
              <li>
                <Link to="/beginner">初心者</Link>
              </li>
              <li>
                <Link to="/intermediate">中級</Link>
              </li>
              <li>
                <Link to="/advanced">上級</Link>
              </li>
            </ul>
          </div>
          </>
        )}
      </div>
      <CategoriesContainer/>
    </header>
    {!isSidebarOpen && <Sidebar/>}
    
    </>
  );
};

export default Navbar;
