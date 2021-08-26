/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { Link } from "react-router-dom";

import SlideShow from "../components/SlideShow";
import { slideItems } from "../utils/SlideItems";

const Carousel = () => {
  return (
    <SlideShow>
      {slideItems.map(({ image, text, id }) => (
        <div
          key={id}
          css={css`
            position: relative;
            width: 100%;
            height: 80vh;
            max-height: 80vh;
            transition: transform 2.6s ease-in-out;
          `}
        >
          <div
            css={css`
              background-image: url(${image});
              height: 100%;
              background-size: cover;
              background-position: center center;
              background-repeat: no-repeat;
            `}
          >
            <div
              css={css`
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 2;
                background-color: #080d15;
                opacity: 0.7;
              `}
            ></div>
          </div>
          <div
            css={css`
              opacity: 1;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 3;
            `}
          >
            <Link
              to="/products"
              css={css`
                text-decoration: none;
                background: linear-gradient(#e26629, #3c2d26);
                color: #fff !important;
                padding: 1rem 3rem;
                transition: all 0.5s ease-in-out;
              `}
            >
              {text}
            </Link>
          </div>
        </div>
      ))}
    </SlideShow>
  );
};

export default Carousel;
