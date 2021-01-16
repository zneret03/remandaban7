import React from "react";
import { LandingPageLogo } from "../icon";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHero = styled.section`
  max-width: 1200px;
  padding: 130px 0 0;
  display: flex;
  justify-content: space-between;
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 130px 80px;
  }

  @media (max-width: 780px) {
    padding: 130px 50px;
  }

  @media (max-width: 480px) {
    padding: 130px 20px;
  }

  svg {
    transition: var(--transition);
    margin: -100px 0px;

    @media (max-width: 1080px) {
      display: none;
    }
  }

  h1 {
    letter-spacing: var(--letter-spacing);
    max-width: 350px;
    line-height: 82px;
    font-weight: lighter;
    font-size: 80px;

    @media (max-width: 780px) {
      line-height: 75px;
      font-size: 60px;
    }

    @media (max-width: 480px) {
      line-height: 60px;
      font-size: 45px;
    }
  }

  button {
    margin: 50px auto;
    outline: none;
    border: solid 1px var(--brown);
    background: transparent;
    padding: 10px 1.75rem;
    transition: var(--transition);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.215em;
    font-size: 12px;
    cursor: pointer;
    border-radius: var(--border-radius);

    &:hover,
    &:focus {
      background-color: #f3ebeb;
      color: #665b5b;
      border: solid 1px #ccbcbc;
    }
  }
`;

const Hero: React.FC = () => {
  return (
    <>
      <StyledHero>
        <div>
          <h1>AR. JEWELYN REMENDAB</h1>
          <h1>AN</h1>
          <Link to="/panel">
            <button>Explore</button>
          </Link>
        </div>
        <LandingPageLogo />
      </StyledHero>
    </>
  );
};

export default Hero;
