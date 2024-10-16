import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import {
  FaBars,
  FaBell,
  FaQuestionCircle,
  FaRegChartBar,
} from "react-icons/fa";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import ThemeToggle from "../features/ThemeToggle";
import { RxCross2 } from "react-icons/rx";

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility
  const toggleInput = () => {
    setIsVisible(!isVisible);
  };
  return (
    <header>
      <div className="top-header">
        <div className="container-fluid">
          <div className="flex space-between">
            <div>Hr Master</div>
            <div className="flex">
              <ul className="header-option">
                <li>
                  Year: <span id="year" />
                </li>
                <li>
                  Month: <span id="month" />
                </li>
                <li>Regular Period: 01/Oct - 31/Oct</li>
                <li>Casual Period: 01/Oct - 31/Oct</li>
                <li>Ho</li>
              </ul>
              <div className="user-dropdown">
                <button className="user-button" type="button">
                  Admin
                </button>
                {/* drop down */}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
      <div className="main-header">
        <div className="container-fluid">
          <div className="inner-header">
            <div className="flex gap-2">
              <button
                className="btn btn-bpl"
                type="button"
                onClick={toggleSidebar}
              >
                {isSidebarOpen ? (
                  <RxCross2 className="header-icons" />
                ) : (
                  <FaBars className="header-icons" />
                )}
              </button>
              <div className="user-details">
                <div className="img">
                  <img
                    src="/user.avif"
                    alt="user-profile"
                    className="img-responsive user-img"
                  />
                </div>
                <div className="username">BITPLUS DEMO</div>
              </div>
            </div>
            <div className="dashboard-option header-icon-search">
              <div className="input-group-search">
                <input
                  type="text"
                  placeholder="Search"
                  className="input-control"
                />
                <span className="search-icon">
                  <CiSearch />
                </span>
              </div>
              {isVisible && (
                <div id="mobile-search-input">
                  <input
                    type="text"
                    placeholder="Search"
                    className="input-control"
                  />
                </div>
              )}
              <div className="search-icon-button" onClick={toggleInput}>
                <CiSearch className="header-icons" />
              </div>
              <div>
                <FaQuestionCircle className="header-icons" />
              </div>
              <div>
                <FaRegChartBar className="header-icons" />
              </div>
              <div className="bell-icons">
                <FaBell className="header-icons" />
                <span className="notify">1</span>
              </div>
              <div>
                <HiMiniSquares2X2 className="header-icons" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
