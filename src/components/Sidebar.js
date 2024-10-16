import React from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="flex space-between">
        <h4>BITPLUS DEMO</h4>
        <button className="btn btn-bpl" type="button" onClick={toggleSidebar}>
          {isOpen ? <RxCross2 className="sidebar-icons" /> : ``}
        </button>
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
