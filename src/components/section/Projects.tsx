import React from "react";
import styled from "styled-components";
import { Content } from "../../mock/mockData";

const StyledProjects = styled.section`
  text-align: center;
  padding: 120px 0 200px;
  transition: var(--transition);

  h1 {
    font-weight: lighter;
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);
  }
`;

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  position: relative;
  margin-top: 50px;
  grid-gap: 20px;

  @media (max-width: 780px) {
    margin: auto 30px;
  }

  .project-inner {
    margin: 18px 0;

    img {
      margin-bottom: 13px;
      object-fit: cover;
      width: 100%;
      height: 280px;
      border-radius: var(--border-radius);
    }

    .title {
      text-transform: uppercase;
      color: var(--pink);
      font-size: var(--fz-sm);
    }
  }
`;

const Projects: React.FC = () => {
  return (
    <StyledProjects>
      <h1>Project</h1>
      <StyledContent>
        {Content.map((content: any) => (
          <div className="project-inner" key={content.id}>
            <img src={content.image} alt="" />
            <span className="title">{content.title}</span>
          </div>
        ))}
      </StyledContent>
    </StyledProjects>
  );
};

export default Projects;
