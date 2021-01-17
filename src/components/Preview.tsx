import React from "react";
import styled from "styled-components";
import { X } from "react-feather";

const StyledPreview = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(58, 49, 49, 0.5);
  z-index: 10;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;

  .close {
    cursor: pointer;
    float: right;
    padding: 30px 30px 0;
  }

  .preview {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: var(--border-radius);
    width: 600px;
    height: auto;
    background: #fff;

    img {
      border-radius: var(--border-radius) 5px 0 0;
      object-fit: cover;
      width: 100%;
      height: 350px;
    }

    .content {
      padding: 15px 30px;
      h1 {
        text-align: left;
        font-size: var(--fz-lg);
        letter-spacing: 3px;
      }

      p {
        color: var(--pink);
        letter-spacing: 0.1em;
        text-align: left;
      }
    }
  }
`;

interface PropTypes {
  close: (
    event: React.MouseEvent<HTMLDivElement | HTMLOrSVGElement, MouseEvent>
  ) => void;
}

const Preview: React.FC<PropTypes> = ({ close }) => {
  return (
    <StyledPreview>
      <X
        onClick={(event) => close(event)}
        className="close"
        size="30"
        color="#fff"
      />
      <div className="preview">
        <img src="/images/1.jpg" alt="" />
        <div className="content">
          <h1>LOPEZ ANSESRAL HOUSE</h1>
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            purus non enim praesent elementum. Maecenas pharetra convallis
            posuere morbi leo urna molestie at
          </p>
        </div>
      </div>
    </StyledPreview>
  );
};

export default Preview;
