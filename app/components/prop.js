import React from "react";

export default function Prop(props) {
  return (
    <div >
      <p>Name is {props.user.name}</p>
      <p>Name is {props.user.age}</p>
      <p>Name is {props.user.id}</p>
    </div>
  );
}
