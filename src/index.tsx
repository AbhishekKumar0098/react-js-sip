// Your utility functions and Modal component here
import React, { useState } from "react";
export const Name = () => {
  const [first, setFirst] = useState("Yash");
  return (
    <div>
      {first}
      <button
        onClick={() => {
          setFirst("Abhishekk");
        }}>
        Change Name
      </button>
    </div>
  );
};
export const Test = () => {
  return <div>Test</div>;
};

// Export the component to be accessed globally
