import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { ItemListContainer } from './Containers/ItemListContainer'
import {ComponenteEstados} from './ComponenteEstados'
import {Usuarios} from './Usuarios'

const App = () => {

  const mensaje = "Bienvenido a Nuestra Tienda Virtual"

const onAdd =()=> {
  console.log("agregaste algo al carrito");
}

  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={mensaje}/>
    <Usuarios/>
    <ComponenteEstados stock={5} initial={1} onAdd={onAdd}/>
    </>
  );
};

export default App; //lo exporto para que lo puedan detectar los otros archivos
