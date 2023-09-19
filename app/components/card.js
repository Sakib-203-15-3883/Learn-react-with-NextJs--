// components/Card.js

import React from 'react';

const Card = ({ title1, title2, imageUrl }) => {

    
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img src={imageUrl} alt="Card" className="w-full h-48 object-cover"  />
      <div className="px-6 py-4">
        <h2 className="text-2xl mb-2 font-semibold text-gray-800">{title1}</h2>
        <h2  className="text-lg text-gray-600">{title2}</h2>
      </div>
    </div>
  );
};

export default Card;
