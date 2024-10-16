import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "../features/ThemeContext";

const Layout = ({ children, toggleSidebar, isSidebarOpen }) => {
  return (
    <>
      <ThemeProvider>
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
