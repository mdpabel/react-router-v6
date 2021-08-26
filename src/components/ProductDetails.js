/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const ProductDetails = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      css={css`
        display: flex;
        border: 1px solid rgba(0, 0, 0, 0.2);
        background-color: #fff;
        align-items: center;
        margin: 2rem 0;
        @media (max-width: 940px) {
          flex-direction: column;
        }
      `}
    >
      <div
        css={css`
          width: 50%;
          @media (max-width: 940px) {
            width: 100%;
            text-align: center;
          }
        `}
      >
        <img
          width="70%"
          css={css`
            padding: 2rem;
          `}
          src={data?.image}
          alt=""
        />
      </div>

      <div
        css={css`
          width: 50%;
          @media (max-width: 940px) {
            width: 100%;
            padding: 3rem;
          }
        `}
      >
        <h6
          css={css`
            color: #e5622f;
            text-transform: uppercase;
            font-size: 0.8rem;
            font-weight: bold;
          `}
        >
          {data?.category}
        </h6>
        <h1
          css={css`
            color: rgba(0, 0, 0, 0.7);
            padding: 1rem 0;
          `}
        >
          {data?.title}
        </h1>
        <p
          css={css`
            color: rgba(0, 0, 0, 0.6);
          `}
        >
          {data?.description}
        </p>
        <div
          css={css`
            padding: 1rem 0;
          `}
        >
          price : {data?.price}${" "}
          <Button customStyles={{ margin: "0 1rem" }}>Add to card</Button>{" "}
          <Button onClick={() => navigate(-1)}>Back to products</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
