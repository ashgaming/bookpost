import React, { useState } from 'react';

const ReloadButton = () => {
  const [key, setKey] = useState(0);  // State to trigger re-render

  const handleReload = () => {
    setKey(prevKey => prevKey + 1);  // Increment the key to force re-render
  };

  return (
    <div key={key}>
      <h1>My React Component</h1>
      <button
        onClick={handleReload}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Reload Component
      </button>
      {/* Your component content goes here */}
      <p>This content will refresh when you click the button!</p>
    </div>
  );
};

export default ReloadButton;
