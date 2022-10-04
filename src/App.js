import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { ItemListContainer } from './Containers/ItemListContainer'

const App = () => {

  const mensaje = "Bienvenido a Nuestra Tienda Virtual"

  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={mensaje}/>
    </>
  );
};

export default App; //lo exporto para que lo puedan detectar los otros archivos
