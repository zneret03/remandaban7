import React, { useState } from "react";
import styled from "styled-components";
import { Content } from "../../mock/mockData";
import { Preview } from "../";

const StyledProjects = styled.section`
  text-align: center;
  padding: 120px 0 200px;
  transition: var(--transition);
  position: relative;

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
    cursor: pointer;
    margin: 18px 0;
    transition: var(--transition);

    &:hover,
    &:focus {
      outline: 0;
      transform: translateY(-10px);
    }

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
  const [preview, setPreview] = useState<boolean>(false);

  const isPreview = (
    event: React.MouseEvent<HTMLDivElement | HTMLOrSVGElement, MouseEvent>,
    id?: number
  ) => {
    event.preventDefault();
    if (!preview) {
      setPreview(true);
    } else {
      setPreview(false);
    }
  };

  return (
    <StyledProjects>
      {preview && <Preview close={(event) => isPreview(event)} />}
      <h1>Project</h1>
      <StyledContent>
        {Content.map((content: any) => (
          <div
            className="project-inner"
            key={content.id}
            onClick={(event) => isPreview(event, content.id)}
          >
            <img src={content.image} alt="" />
            <span className="title">{content.title}</span>
          </div>
        ))}
      </StyledContent>
    </StyledProjects>
  );
};

export default Projects;
