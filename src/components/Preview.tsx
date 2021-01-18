import React from "react";
import styled from "styled-components";
import { X } from "react-feather";
import { onSearch } from "../utils/Reusable";
import { Content } from "../mock/mockData";

const StyledPreview = styled.div`
  width: 100%;
  height: 100vh;
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
    padding: 20px 20px 0;

    @media (max-width: 480px) {
      padding: 20px 10px 0;
    }
  }

  .preview {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: var(--border-radius);
    width: 100%;
    max-width: 600px;
    height: auto;
    background: #fff;

    img {
      object-fit: cover;
      width: 100%;
      height: 350px;
    }

    .content {
      padding: 15px 30px;

      @media (max-width: 480px) {
        padding: 15px 20px;
      }

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
  title: string;
}

const Preview: React.FC<PropTypes> = ({ close, title }) => {
  const filter = onSearch(title, Content);

  console.log(filter);

  return (
    <StyledPreview>
      <X
        onClick={(event) => close(event)}
        className="close"
        size="30"
        color="#fff"
      />
      {filter.map((data: any) => (
        <div className="preview" key={data.id}>
          <img src={data.image} alt="" />
          <div className="content">
            <h1>{data.title}</h1>
            <p>{data.paragraph}</p>
          </div>
        </div>
      ))}
    </StyledPreview>
  );
};

export default Preview;
