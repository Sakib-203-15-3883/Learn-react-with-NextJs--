import React from "react";

export function Sub() {
  const a = 20;
  const b = 7;
  const sub = a - b;

  return (
    <div>
      <p>Sub = {sub}</p>
    </div>
  );
}

export default function Sum() {
  const a = 10;
  const b = 20;
  const sum = a + b;

  return (
    <section>
      <h1>Sum of 2 numbers = {sum} </h1>
    </section>
  );
}
