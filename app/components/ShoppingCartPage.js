import React, { useState } from 'react';

export default function ShoppingCart({ initialItems }) {
  const [cartItems, setCartItems] = useState(initialItems);

  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4 grid place-content-center">Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="mb-4 flex items-center justify-between">
          <p className="text-lg text-gray-800">{item.name}</p>
          <button
            onClick={() => removeItem(item.id)}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
