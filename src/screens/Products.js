import React from "react";
import { Route, Routes } from "react-router-dom";
import Spinner from "../components/Spinner";
import Product from "./Product";
// import { Outlet } from "react-router-dom";
const ProductsIndex = React.lazy(() =>
  import(/* webpackPrefetch: true */ "./ProductsIndex")
);

const Products = () => {
  // return <Outlet />;
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<Spinner />}>
            <ProductsIndex />
          </React.Suspense>
        }
      />
      <Route path="/:id" element={<Product />} />
    </Routes>
  );
};

export default Products;
