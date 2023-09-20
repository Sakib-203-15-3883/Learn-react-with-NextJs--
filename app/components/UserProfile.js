import React, { useState } from "react";

export default function UserProfile({ user }) {
  console.log(user);

  const [showEmail, setShowEmail] = useState(false);

  const toggleEmail = () => {
    setShowEmail(!showEmail);
  };

  return (
    <div className="grid place-content-center bg-gray-100 p-4 rounded-lg shadow-md">
      <h1 className=" grid place-content-center text-2xl font-bold">{user.name}</h1>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2"
        onClick={toggleEmail}
      >
        {showEmail ? "Hide Email" : "Show Email"}{" "}
      </button>

      {showEmail && <p className="text-gray-600 mt-4">Email:{user.email}</p>}
    </div>
  );
}
