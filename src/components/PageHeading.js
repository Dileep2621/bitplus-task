import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const PageHeading = ({ title }) => {
  return (
    <div className="heading">
      <h3>{title && title}</h3>
      <span className="header-icon">
        <FaQuestionCircle className="page-icon" />
      </span>
    </div>
  );
};

export default PageHeading;
