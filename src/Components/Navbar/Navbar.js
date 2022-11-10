import React from "react";
import logo from "../../assets/trajelogo.jpg";
import { CartWidget } from "../CartWidget/CartWidget";
import { styles } from "./Navbar.style";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  const categorias = [
    { nombre: "Corbatas", id: 0, ruta: "/category/jewelery" },
    { nombre: "Boinas", id: 1, ruta: "/category/electronics" },
    { nombre: "Carteras", id: 2, ruta: "/category/men's clothing" },
    { nombre: "Habanos", id: 3, ruta: "/category/women's clothing" },
  ];

  return (
    <header style={styles.container}>
      <Link style={styles.imagenes} to="/">
        <img style={styles.imagenes} src={logo} alt="tienda online" />
      </Link>
      <h1>Sastreria Gutierrez</h1>
      <nav>
        {categorias.map((categoria) => {
          return (
            <NavLink
              key={categoria.id}
              style={styles.categorias}
              to={categoria.ruta}
            >
              {categoria.nombre}
            </NavLink>
          );
        })}
      </nav>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </header>
  );
};

export default Navbar;