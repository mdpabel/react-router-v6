/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useEffect, useState } from "react";

function SlideShow({ children, time = 5000 }) {
  const [state, setState] = useState({
    current: 0,
    total: React.Children.count(children),
  });

  const left = () => {
    const { current, total } = state;
    setState({
      ...state,
      current: current - 1 === -1 ? total - 1 : current - 1,
    });
  };
  const right = () => {
    const { current, total } = state;
    setState({
      ...state,
      current: current + 1 === total ? 0 : current + 1,
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const { current, total } = state;
      setState({
        ...state,
        current: current + 1 === total ? 0 : current + 1,
      });
    }, time);
    return () => clearInterval(intervalId);
  }, [state, time]);

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <i onClick={left} className="fas fa-angle-left"></i>
      {React.Children.toArray(children)[state.current]}
      <i onClick={right} className="fas fa-angle-right"></i>
    </div>
  );
}
/* eslint-disable no-func-assign */
SlideShow = React.memo(SlideShow);

export default SlideShow;
