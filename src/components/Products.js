/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Link } from "react-router-dom";

function SingleProduct({ product }) {
  const { id, category, price, image, title } = product;

  return (
    <>
      <Link
        to={id.toString()}
        css={css`
          height: 100%;
          box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
          background-color: #fff;
          max-height: 320px;
          display: inline-block;
          margin: 1rem;
        `}
      >
        <img
          style={{ padding: "10px" }}
          width="100%"
          height="62%"
          src={image}
          alt={title}
        />
        <div
          css={css`
            padding: 0.8rem;
          `}
        >
          <div
            css={css`
              font-size: 0.8rem;
              text-transform: capitalize;
            `}
          >
            category :{" "}
            <span
              css={css`
                color: rgba(0, 0, 0, 0.7);
              `}
            >
              {category}
            </span>
          </div>
          <div
            css={css`
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            `}
          >
            {title}
          </div>
        </div>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            border: 1px solid rgba(0, 0, 0, 0.1);
            padding: 0.5rem 0.8rem;
            color: rgba(0, 0, 0, 0.6);
          `}
        >
          <span>
            <i title="Add to wishlist" className="fas fa-heart"></i>
          </span>
          <span>
            Price{" "}
            <span
              css={css`
                color: rgba(0, 0, 0, 0.8);
                font-weight: 400;
              `}
            >
              ${price}
            </span>
          </span>
        </div>
      </Link>
    </>
  );
}

function FallbackProducts() {
  return (
    <h2
      css={css`
        padding: 4rem 3rem;
        background-color: #fff;
        margin-top: 2rem;
        border: 1px solid rgba(0, 0, 0, 0.1);
        color: red;
      `}
    >
      No products found
    </h2>
  );
}

function FallbackProduct({ id }) {
  return (
    <h2
      css={css`
        padding: 4rem 3rem;
        background-color: #fff;
        margin-top: 2rem;
        border: 1px solid rgba(0, 0, 0, 0.1);
        color: red;
      `}
    >
      No products found with the id of : {id}!
    </h2>
  );
}

export { FallbackProducts, FallbackProduct, SingleProduct };
