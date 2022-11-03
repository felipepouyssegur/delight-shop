import React, { useState } from "react";

const Item = ({ data }) => {
  console.log(data);
  return (
    <div>
      <p>{data.nombre}</p>
      <img src={require(`../assets/img/gorro.png`)} alt="fotoremera" />
    </div>
  );
};

export default Item;
