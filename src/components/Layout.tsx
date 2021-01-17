import React from "react";
import { MenuSidebar, Footer, Contact } from "./";

interface PropTypes {
  children: React.ReactNode;
}

const Layout: React.FC<PropTypes> = ({ children }) => {
  return (
    <div>
      <div>
        <MenuSidebar />
        <div>{children}</div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
