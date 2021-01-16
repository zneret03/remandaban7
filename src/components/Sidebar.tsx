import React from "react";
import { NavbarLogo } from "./icon";
import { Sidebar } from "../mock/mockData";
import styled from "styled-components";

const StyledNavbar = styled.div`
  position: fixed;
  height: 100vh;
  transition: var(--transition);
  padding: 30px 50px 0;
  margin: 0 auto;

  div {
    ul {
      padding: 10px 0;
      li {
        color: var(--pink);
        max-width: 100px;
        cursor: pointer;
        font-size: 14px;
        list-style: none;
        margin: 22px 0;
        text-transform: uppercase;
        letter-spacing: 0.215em;

        &:hover,
        &:focus {
          color: var(--brown);
        }
      }
    }
  }
`;

const Navbar: React.FC = () => {
  return (
    <>
      <StyledNavbar>
        <NavbarLogo />
        <div>
          <ul>
            {Sidebar.map((data: any) => (
              <li>{data.name}</li>
            ))}
          </ul>
        </div>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
