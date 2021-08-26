import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import { FallbackProduct } from "../components/Products";
import Spinner from "../components/Spinner";
import { useAsync } from "../hooks/useAsync";
import { fetchProduct } from "../utils/fetchProducts";

function DisplayProduct({ data, status, error, id }) {
  if (status === "pending" || status === "idle") {
    return <Spinner />;
  } else if (status === "resolved" && data === null) {
    return <FallbackProduct id={id} />;
  } else if (status === "resolved") {
    return <ProductDetails data={data} />;
  } else if (status === "rejected") {
    return <FallbackProduct id={id} error={error} />;
  }
}

const Product = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { run, data, error, status } = useAsync();

  useEffect(() => {
    run(fetchProduct(id));
  }, [id, run]);

  useEffect(() => {
    if (!Number(id)) {
      navigate("/products", { replace: true, state: { id: id } });
      // return <FallbackProduct id={id} />;
    }
  }, [id, navigate]);

  return <DisplayProduct data={data} error={error} id={id} status={status} />;
};

export default Product;
