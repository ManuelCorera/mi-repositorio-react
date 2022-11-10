import React, { useEffect, useState } from "react";
import ItemList from "../ItemListContainer/ItemList";
import { useParams } from "react-router-dom";
import {getDocs, collection, query, where} from "firebase/firestore"
import {db} from "../../firebase/firebase"

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { id } = useParams();

  const URL_BASE = 'https://fakestoreapi.com/products'
  const URL_CAT = `${URL_BASE}/category/${id}`

const productCollection = collection(db, 'productos');
//const q = query(productCollection, where('categoria', '==', 'men`s clothing' )) ----> filtrado de categorias

useEffect(() => {
  getDocs(productCollection)
  .then((result) => {
    const listProducts = result.docs.map((item) => {
      return {
        ...item.data(),
        id: item.id,
      };
    });
    setProducts(listProducts);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(setLoading(false));
/*
  const getProducts = async () => {
      try {
        const res = await fetch(id ? URL_CAT : URL_BASE);
        const data = await res.json();
        setProducts(data);
      } catch {
        console.log("error");
      } finally {
        setLoading(false);
      }
    };
    getProducts()*/

},[id, URL_BASE, URL_CAT, productCollection]); 
  return (
    <>
      <h2>{greeting}</h2>
      {<>{loading ? <p>Cargando...</p> : <ItemList products={products} />}</>}
    </>
  );
};


