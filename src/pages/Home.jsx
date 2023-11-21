import React, { useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";
import axios from "axios";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/?limit=10")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? <Loading /> : <ItemListContainer products={products} />}
    </div>
  );
};

export default Home;
