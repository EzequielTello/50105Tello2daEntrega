import React from "react";
import { useAllProductsByFilter } from "../hooks/useProducts";
import { LoaderComponent, ItemListContainer } from "../components";
import { useParams } from "react-router-dom";

const Category = () => {
  const { categoryId } = useParams();
  const { products, loading, error } = useAllProductsByFilter(
    "products",
    categoryId,
    "category"
  );
  return (
    <div>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>Hubo un error</div>
      ) : (
        <ItemListContainer products={products} />
      )}
    </div>
  );
};

export default Category;
