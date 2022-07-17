import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
const [selectedCategory,setSelectedCategory] = useState('All');

function changeSelectedCategory(event){
if(event.target.value === 'All'){
return true;
}
setSelectedCategory((selectedCategory)=>selectedCategory=event.target.value)
}

const itemsToDisplay = items.filter(item=>{
  if(selectedCategory === 'All') return true;
  return item.category === selectedCategory} );
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={changeSelectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((itemToDisplay) => (
          <Item key={itemToDisplay.id} name={itemToDisplay.name} category={itemToDisplay.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
