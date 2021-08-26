/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import Button from "../components/Button";
import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  const { signOut } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={signOut}>Logout</button>
    </div>
  );
};

export default Dashboard;
