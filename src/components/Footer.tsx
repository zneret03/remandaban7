import React from "react";
import { socialInformation } from "../mock/mockData";
import styled from "styled-components";

const StyledFooter = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  transition: var(--transition);
  padding: 100px 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1080px) {
    max-width: 850px;
  }

  @media (max-width: 780px) {
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 5px 0 10px;
  }

  span {
    letter-spacing: var(--letter-spacing);
    color: var(--pink);

    @media (max-width: 480px) {
      font-size: var(--fz-sm);
    }
  }

  ul {
    list-style: none;
    display: flex;
    padding: 0;

    li {
      color: var(--pink);
      margin: 0 15px;

      svg {
        cursor: pointer;
        &:hover,
        &:focus {
          color: var(--brown);
        }
      }
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <span>&copy; 2021 JEWELYN REMANDABAN</span>
      <ul>
        {socialInformation.map((icon: any, index: number) => (
          <li key={index}>{icon.icon}</li>
        ))}
      </ul>
    </StyledFooter>
  );
};

export default Footer;
