// Your utility functions and Modal component here
import React, { useState } from "react";
export const add = (a: number, b: number) => a + b;
export const subtract = (a: number, b: number) => a - b;

export const Number = () => {
  const [first, setFirst] = useState("Yash");
  return (
    <div>
      {first}
      <button
        onClick={() => {
          setFirst("Abhishek");
        }}>Change Name</button>
    </div>
  );
};

// Export the component to be accessed globally
export default Number;
