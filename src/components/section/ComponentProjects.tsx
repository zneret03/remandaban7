import React, { useState } from "react";
import styled from "styled-components";
import { ReusableCSS } from "../../style/ReusableStyle";
import { Preview } from "../";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Content } from "../../mock/mockData";

const StyledProjects = styled.section`
  text-align: center;
  padding: 120px 0 200px;
  transition: var(--transition);

  h1 {
    ${ReusableCSS.header1};
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

const ComponentProjects: React.FC = () => {
  const [preview, setPreview] = useState<boolean>(false);
  const [contentTitle, setContentTitle] = useState("");

  const isPreview = (
    event: React.MouseEvent<HTMLDivElement | HTMLOrSVGElement, MouseEvent>,
    title?: any
  ) => {
    event.preventDefault();
    if (!preview) {
      setPreview(true);
      setContentTitle(title);
    } else {
      setPreview(false);
    }
  };

  return (
    <StyledProjects>
      {preview && (
        <Preview close={(event) => isPreview(event)} title={contentTitle} />
      )}
      <h1>Project</h1>
      <StyledContent>
        {Content.map((content: any) => (
          <div
            className="project-inner"
            key={content.id}
            onClick={(event) => isPreview(event, content.title)}
          >
            <LazyLoadImage
              delayTime={1000}
              threshold={100}
              useIntersectionObserver={true}
              src={content.image}
              effect="blur"
              alt="Project Image"
            />
            <span className="title">{content.title}</span>
          </div>
        ))}
      </StyledContent>
    </StyledProjects>
  );
};

export default ComponentProjects;
