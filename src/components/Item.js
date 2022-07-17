import React, { useState } from "react";

function Item({ name, category }) {
 const [inCart,setIncart]=useState(false);
 
 function addToCart(){
  setIncart(()=>!inCart);
 }

 const liClass = inCart? 'in-cart':'';
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{inCart?'Remove From Cart':'Add to Cart'}</button>
    </li>
  );
}

export default Item;
