/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import { navLinks } from "../utils/nav-links";
import logo from "../utils/logo.jpg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header
      css={css`
        background-color: #ffffff;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1em, 0;
          width: 90%;
          margin: 0 auto;
        `}
      >
        <Link
          to="/"
          css={css`
            height: 60px;
            display: inline-block;
          `}
          className="logo"
        >
          <img width="100%" height="100%" src={logo} alt="" />
        </Link>
        <nav>
          {navLinks.map(({ label, id, route, end }) => (
            <NavLink
              css={css`
                padding: 1.1rem 0;
                display: inline-block;
                margin-left: 2rem;
                text-transform: capitalize;
              `}
              key={id}
              to={route}
              end={end}
              activeClassName="active"
              activeStyle={{
                color: "#e6622a",
                fontWeight: 600,
              }}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
