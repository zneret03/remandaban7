import React from "react";
import styled from "styled-components";
import { contact } from "../../utils/Reusable";

const StyleContact = styled.section`
  text-align: center;
  transition: var(--transition);

  @media (max-width: 480px) {
    padding: 0 20px 200px;
  }

  h1 {
    margin-bottom: 20px;
    font-weight: lighter;
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);
  }

  p {
    margin: 0 auto;
    line-height: 25px;
    max-width: 420px;
    color: var(--pink);
    font-size: var(--fz-lg);
    letter-spacing: 0.15em;

    @media (max-width: 780px) {
      font-size: var(--fz-sm);
    }
  }

  button {
    margin-top: 35px;
    transition: var(--transition);
    text-transform: uppercase;
    color: var(--pink);
    background-color: transparent;
    border: 1px solid var(--pink);
    border-radius: var(--border-radius);
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    padding: 1rem 1.75rem;

    &:hover,
    &:focus,
    &:active {
      background-color: var(--white-slate);
      outline: none;
    }

    &:after {
      display: none !important;
    }
  }
`;

const ComponentContact: React.FC = () => {
  return (
    <StyleContact>
      <h1>Get In Touch</h1>
      <p>
        If you have project in mind, why not we get in touch. Lets work
        together. Im available for interesting freelance work. Big or small.
      </p>
      <button onClick={(event) => contact(event)}>contact</button>
    </StyleContact>
  );
};

export default ComponentContact;
