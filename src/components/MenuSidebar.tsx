import React, { useContext, useState, useEffect } from "react";
import { NavbarLogo, Menu } from "./icon";
import { Sidebar } from "../mock/mockData";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalProvider";
import styled from "styled-components";

const StyledNavbar = styled.div`
  position: fixed;
  height: 100%;
  transition: var(--transition);
  margin: 0 auto;
  padding: 30px 50px;
  z-index: 1;
  background: #fff;

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

    /* @media (max-width: 1080px) {
      display: none;
    } */
  }
`;

const StyledMenu = styled.div`
  margin: 30px 50px;
  cursor: pointer;
  display: none;
  float: right;
  transition: var(--transition);

  @media (max-width: 1080px) {
    display: block;
  }

  @media (max-width: 780px) {
    margin: 30px 30px;
  }
`;

const MenuSidebar: React.FC = () => {
  const [block, setBlock] = useState(true);
  const { dispatch, toggleSidebar } = useContext(GlobalContext);

  const isToggle = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    dispatch({
      type: "sidebarToggle",
      payload: { toggleSidebar: !toggleSidebar },
    });
  };

  console.log(block);

  useEffect(() => {
    const responsive = () => {
      const xAxis = window.innerWidth < 1080;
      if (xAxis) {
        setBlock(true);
      } else {
        setBlock(false);
      }
    };

    window.addEventListener("resize", responsive);
    return () => window.removeEventListener("resize", responsive);
  }, [block]);

  return (
    <>
      <StyledMenu onClick={(event) => isToggle(event)}>
        <Menu />
      </StyledMenu>
      <StyledNavbar
        style={{
          //display: block ? (toggleSidebar ? "block" : "none") : "block",
          transform: block
            ? toggleSidebar
              ? "translateX(0%)"
              : "translateX(-100%)"
            : "translateX(0%)",
        }}
      >
        <div>
          <NavbarLogo />
          <ul>
            {Sidebar.map((data: any) => (
              <Link to={data.link} key={data.id}>
                <li>{data.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </StyledNavbar>
    </>
  );
};

export default MenuSidebar;
