// Your utility functions and Modal component here
import React, { useState } from "react";
export const add = (a: number, b: number) => a + b;
export const subtract = (a: number, b: number) => a - b;
export const Number = () => {
  const [first, setfirst] = useState("Yash");
  return <div>{first}</div>;
};
