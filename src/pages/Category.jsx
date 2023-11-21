import React, { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://dummyjson.com/products/category/${categoryId}`)
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div>
      {loading ? (
        <Loading size="150px" color="blue" />
      ) : (
        <ItemListContainer products={products} />
      )}
    </div>
  );
};

export default Category;
