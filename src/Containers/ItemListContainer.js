import React from "react";
import ItemCount from "../Components/ItemCount/ItemCount";

export const ItemListContainer = ({ greeting }) => {

  const onAdd = (count) => {
    console.log(`El usuario quiere agregar ${count} productos`);
  }

  return (
    <>
      <h2>{greeting}</h2>
      <ItemCount stock={10} initial={1} onAdd={onAdd}/>


    </>
  );
};