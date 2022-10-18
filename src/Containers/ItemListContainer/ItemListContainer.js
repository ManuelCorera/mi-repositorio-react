import React, { useEffect, useState } from "react";
import ItemList from "../ItemListContainer/ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { id } = useParams();

  const URL_BASE = 'https://fakestoreapi.com/products'
  const URL_CAT = `${URL_BASE}/category/${id}`

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(URL_CAT);
        const data = await res.json();
        setProducts(data);
      } catch {
        console.log("error");
      } finally {
        setLoading(false);
      }
    };
    getProducts()
  },); 
  return (
    <>
      <h2>{greeting}</h2>
      {<>{loading ? <p>Cargando...</p> : <ItemList products={products} />}</>}
    </>
  );
};


