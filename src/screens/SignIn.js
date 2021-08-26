/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";

const SignIn = () => {
  const { values, onChange, onSubmit } = useForm({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { signIn } = useAuth();

  return (
    <div
      css={css`
        height: 70vh;
        display: flex;
        align-items: center;
      `}
    >
      <form
        onSubmit={(e) =>
          onSubmit(
            e,
            signIn(values, () => navigate("/dashboard", { replace: true }))
          )
        }
        css={css`
          display: flex;
          flex-direction: column;
          width: 500px;
          margin: auto;
          justify-content: center;
          gap: 1rem;
          border: 1px solid rgba(0, 0, 0, 0.2);
          background-color: #fff;
          padding: 3rem;
        `}
      >
        <h4
          css={css`
            text-align: center;
          `}
        >
          Login
        </h4>
        <input
          css={css`
            outline: none;
          `}
          type="text"
          name="username"
          placeholder="Username"
          onChange={onChange}
          value={values["username"]}
          required
          minLength="3"
        />
        <input
          css={css`
            outline: none;
          `}
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
          value={values["password"]}
          required
          minLength="5"
        />
        <Button type="submit">Login</Button>
        <small>
          Don't have account?{" "}
          <Link
            style={{ color: "#ef622f", textDecoration: "underline" }}
            to="/signup"
          >
            Create an account
          </Link>{" "}
        </small>
      </form>
    </div>
  );
};

export default SignIn;
