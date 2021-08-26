/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useEffect } from "react";
import { useAsync } from "../hooks/useAsync";
import { fetchProducts } from "../utils/fetchProducts";
import { FallbackProducts, SingleProduct } from "../components/Products";
import Spinner from "../components/Spinner";
import { useLocation } from "react-router-dom";

function DisplayProducts({ status, data, error }) {
  if (status === "pending" || status === "idle") {
    return <Spinner />;
  } else if (status === "resolved") {
    return data?.map((product) => (
      <SingleProduct key={product.id} product={product} />
    ));
  } else if (status === "rejected") {
    return <FallbackProducts />;
  }
}

const ProductsScreen = () => {
  const { state } = useLocation();
  const { run, data, status, error } = useAsync();

  useEffect(() => {
    run(fetchProducts());
  }, [run]);

  if (state && status === "resolved") {
    console.warn(
      `Id should be Number, you searched with the id of ${state.id}`
    );
  }

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-template-rows: 1fr;
      `}
    >
      <DisplayProducts data={data} error={error} status={status} />
    </div>
  );
};

export default ProductsScreen;
