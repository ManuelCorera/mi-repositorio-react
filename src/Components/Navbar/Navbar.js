import React from "react";
import logo from "../../assets/trajelogo.jpg";
import { styles } from "./Navbar.style";

const Navbar = () => {

  const categorias = [
    {nombre:"Camisas", id:0, ruta:"#"},
    {nombre:"Pantalones", id:1, ruta:"#"},
    {nombre:"Zapatos", id:2, ruta:"#"},
  ];

  return (
    <header style={styles.container}>
      <img style={styles.imagenes} src={logo} alt="tienda online" />
      <h1>Sastreria Gutierrez</h1>
      <nav>
        {
          categorias.map((categoria)=>{
            return <a key={categoria.id} style={styles.categorias} href={categoria.ruta}>{categoria.nombre}</a>
          })
        }
      </nav>
    </header>
  );
};

export default Navbar;