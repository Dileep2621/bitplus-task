import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      title={theme === "light" ? " Night Mode" : " Day Mode"}
    >
      {theme === "light" ? (
        <FaMoon className="header-icons" />
      ) : (
        <FaSun className="header-icons" />
      )}
    </button>
  );
};

export default ThemeToggle;
