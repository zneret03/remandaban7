import React from "react";
import styled from "styled-components";

const StyledProjects = styled.section`
  padding: 110px 0 0;
  text-align: center;

  h1 {
    font-weight: lighter;
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);
  }
`;

const Projects: React.FC = () => {
  return (
    <StyledProjects>
      <h1>Project</h1>
    </StyledProjects>
  );
};

export default Projects;
