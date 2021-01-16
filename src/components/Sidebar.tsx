import React from "react";
import { NavbarLogo, Menu } from "./icon";
import { Sidebar } from "../mock/mockData";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.div`
  position: fixed;
  width: 90%;
  height: 100%;
  transition: var(--transition);
  margin: 0 auto;
  padding: 30px 50px;

  .Menu {
    cursor: pointer;
    text-align: right;
    display: none;
    transition: var(--transition);

    @media (max-width: 1080px) {
      display: block;
    }

    @media (max-width: 780px) {
      padding: 0 30px;
    }
  }

  div {
    ul {
      padding: 10px 0;

      a {
        text-decoration: none;
      }

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

    @media (max-width: 1080px) {
      display: none;
    }
  }
`;

const Navbar: React.FC = () => {
  return (
    <>
      <StyledNavbar>
        <div className="Menu">
          <Menu />
        </div>
        <div>
          <NavbarLogo />
          <ul>
            {Sidebar.map((data: any) => (
              <Link to={data.link}>
                <li>{data.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
