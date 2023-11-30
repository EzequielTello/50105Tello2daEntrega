import React, { useEffect, useState } from "react";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
const Item = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loading size="150px" color="blue" />
      ) : (
        <ItemDetailContainer product={product} />
      )}
    </div>
  );
};

export default Item;
