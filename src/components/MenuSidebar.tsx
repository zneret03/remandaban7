import React, { useContext, useState, useEffect } from "react";
import { NavbarLogo } from "./icon";
import { Menu } from "react-feather";
import { Sidebar } from "../mock/mockData";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalProvider";
import styled from "styled-components";
import { contact } from "../utils/Reusable";

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
      font-size: 14px;

      a {
        text-decoration: none;
      }

      li {
        color: var(--pink);
        max-width: 100px;
        cursor: pointer;
        list-style: none;
        margin: 22px 0;
        text-transform: uppercase;
        letter-spacing: 0.215em;

        &:hover,
        &:focus {
          color: var(--brown);
        }

        button {
          padding: 0;
          transition: var(--transition);
          text-transform: uppercase;
          color: var(--pink);
          background-color: transparent;
          border: 1px solid #fff;
          font-size: 14px;
          font-family: var(--font-mono);
          line-height: 1;
          text-decoration: none;
          cursor: pointer;
          letter-spacing: 0.215em;
          transition: var(--transition);

          &:hover,
          &:focus,
          &:active {
            color: var(--brown);
            outline: none;
          }
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

  useEffect(() => {
    const responsive = () => {
      const xAxis = window.innerWidth < 1080;
      if (xAxis) {
        setBlock(true);
      } else {
        setBlock(false);
      }
    };

    responsive();

    window.addEventListener("resize", responsive);
    return () => window.removeEventListener("resize", responsive);
  }, [block]);

  console.log(block);

  return (
    <>
      <StyledMenu onClick={(event) => isToggle(event)}>
        <Menu />
      </StyledMenu>
      <StyledNavbar
        style={{
          //display: block ? "block" : "none",
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
            <li>
              <button onClick={(event) => contact(event)}>Contact</button>
            </li>
            <li>
              <button>Resume</button>
            </li>
          </ul>
        </div>
      </StyledNavbar>
    </>
  );
};

export default MenuSidebar;
