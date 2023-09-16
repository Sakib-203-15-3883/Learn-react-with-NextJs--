import React from "react";
import Prop from "./prop";

export default function UserInfo() {
  const user = {
    name: "sakib",
    age: 23,
    id: "3883"
  };

  return (
    <div>
      <Prop user={user} />
    </div>
  );
}
