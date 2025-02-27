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
        }}>Change Name</button>
    </div>
  );
};

// Export the component to be accessed globally
export default Name;
