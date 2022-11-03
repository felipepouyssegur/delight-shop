import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  console.log("ccccccccccccccccccccccccc", products);
  return (
    <div>
      {products.map((product) => (
        <Item data={product} />
      ))}
    </div>
  );
};

export default ItemList;
