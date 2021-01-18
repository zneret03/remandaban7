import React from "react";
import { MenuSidebar, Footer, ComponentContact } from "./";

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
      <ComponentContact />
      <Footer />
    </div>
  );
};

export default Layout;
