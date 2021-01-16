import React from "react";
import { Sidebar, Footer, Contact } from "./";

interface PropTypes {
  children: React.ReactNode;
}

const Layout: React.FC<PropTypes> = ({ children }) => {
  return (
    <div>
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
