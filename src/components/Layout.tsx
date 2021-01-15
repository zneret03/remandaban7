import React from "react";
import GlobalStyle from "../style/GlobalStyle";
interface PropTypes {
  children: React.ReactNode;
}

const Layout: React.FC<PropTypes> = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
