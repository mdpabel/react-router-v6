/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";

const Button = ({ type = "button", children, customStyles }) => {
  return (
    <button
      css={css`
        ${customStyles};
        background-color: #e5622f;
        border: none;
        color: #fff;
        padding: 0.5rem 2rem;
        font-size: 0.8rem;
        border-radius: 4px;
        &:active {
          outline: none;
          border: none;
        }
      `}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
