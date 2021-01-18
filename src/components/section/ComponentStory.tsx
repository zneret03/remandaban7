import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ReusableCSS } from "../../style/ReusableStyle";
import styled from "styled-components";

const StyledStory = styled.section`
  text-align: center;
  padding: 120px 30px 200px;

  h1 {
    ${ReusableCSS.header1}
    margin-bottom: 35px;
  }

  .story-content {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 800px;
    transition: var(--tranistion);

    @media (max-width: 1080px) {
      flex-direction: column;
    }

    img {
      object-fit: cover;
      width: 250px;
      height: auto;
      border-radius: var(--border-radius);

      @media (max-width: 1080px) {
        margin: 50px auto;
      }
    }

    .paragraph {
      max-width: 500px;
      text-align: left;
      color: var(--pink);
      line-height: 155.69%;
      letter-spacing: 0.1em;

      @media (max-width: 1080px) {
        margin: 0 auto;
      }

      @media (max-width: 780px) {
        font-size: var(--fz-sm);
      }
    }
  }
`;

const ComponentStory: React.FC = () => {
  return (
    <StyledStory>
      <h1>Story</h1>
      <div className="story-content">
        <div className="paragraph">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            purus non enim praesent elementum. Maecenas pharetra convallis
            posuere morbi leo urna molestie at
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            purus non enim praesent elementum. Maecenas pharetra convallis
            posuere morbi leo urna molestie at
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>
        <LazyLoadImage
          effect="blur"
          delayTime={1000}
          src="/images/profile.jpg"
          alt=""
        />
      </div>
    </StyledStory>
  );
};

export default ComponentStory;
