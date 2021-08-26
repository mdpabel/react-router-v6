/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Header from "./components/Header";
import About from "./screens/About";
// eslint-disable-next-line no-unused-vars
import FourOFour from "./screens/FourOFour";
import Home from "./screens/Home";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import "./styles";
import Products from "./screens/Products";
import ProtectedRoute from "./utils/ProtectedRoute";
import Dashboard from "./screens/Dashboard.js";
import { useAuth } from "./hooks/useAuth";

const App = () => {
  const { user } = useAuth();

  return (
    <Router>
      <Header />
      <main
        css={css`
          width: 90%;
          margin: 0 auto;
        `}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products*" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <ProtectedRoute
            path="/dashboard"
            auth={user}
            element={<Dashboard />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
