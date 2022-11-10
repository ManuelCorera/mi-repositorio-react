import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Context } from "../../Context/CustomContext";
import "./CartWidget.css";

export const CartWidget = () => {
  const { qty } = useContext(Context);
  return (
    <>
    <p class="cant-carrito">{qty}</p>
      <ShoppingCartIcon color="primary" fontSize="large" />
    </>
  );
};