import React from "react";
import logo from "../../assets/trajelogo.jpg";
import { CartWidget } from "../CartWidget/CartWidget";
import { styles } from "./Navbar.style";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const categorias = [
    { nombre: "Camisas", id: 0, ruta: "/categoria/camisas" },
    { nombre: "Abrigos", id: 1, ruta: "/categoria/abrigos" },
    { nombre: "Pantalones", id: 2, ruta: "/categoria/pantalones" },
    { nombre: "Calzado", id: 3, ruta: "/categoria/calzado" },
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