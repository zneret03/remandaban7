import React from "react";
import { Sidebar, Footer } from "./";

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
      <Footer />
    </div>
  );
};

export default Layout;
