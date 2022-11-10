import React, { useContext } from "react";
import { Context } from "../../Context/CustomContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore"

export const Cart = ({ estilo, color }) => {
  const { cart, totalCompra, clear } = useContext(Context);

  const comprador = {
    nombre: 'user',
    apellido: 'username',
    email: 'user@user.com'
  };

  const finalizarCompra = ()=>{
    const ventasCollection = collection(db,"ventas");
    addDoc(ventasCollection,{
      comprador,
      items:[{nombre:'{producto.id}'}],
      total: 200,
      date:serverTimestamp()
    })
    .then(result=>{
      console.log(result.id);
    })
    .catch(e => {
      console.log('todo mal');
      console.log(e);
    });
    
    clear();
  }

  const actualizarStock = ()=>{
    const updateStock = doc(db, "productos","zy4kgnX86d2LTgs0iETV")
    updateDoc(updateStock,{stock:50})
  }


  return (
    <>
      {cart.length === 0 ? (
        <>
          <p>
            No agregaste productos aun, <Link to="/">haz click aqui</Link> para ver nuestro catálogo.
          </p>
        </>
      ) : (
        <>
          {cart.map((producto) => (
            <h1 key={producto.id}>{producto.title}</h1>
          ))}
      <button onClick={finalizarCompra}>Finalizar compra</button>
        </>
      )}
    </>
  );
};