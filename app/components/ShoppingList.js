// src/ShoppingList.js
import React, { useState } from "react";

function ShoppingList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim() === "") {
      return;
    }
    setItems([...items, newItem]);
    setNewItem("");
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className="container mx-auto mt-12 ">
      <h1 className="text-2xl font-semibold mb-4 grid place-content-center">Shopping List</h1>

      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Add an item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="border rounded py-2 px-3 flex-grow"
        />
        <button
          onClick={addItem}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add
        </button>
      </div>


      <ul className="grid gap-5 ">

        {items.map((item, index) => (
          <li key={index} className="mb-2">

            {item}{" "}

            {console.log(item)}

            <button
              onClick={() => removeItem(index)}
              className="bg-red-500 text-white py-1 px-2 rounded"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
