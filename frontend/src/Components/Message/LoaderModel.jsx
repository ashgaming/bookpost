import React from 'react';

const LoaderModel = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="text-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
        <h2 className="text-white text-xl font-semibold">Loading...</h2>
        <p className="text-white text-sm mt-2">Please wait</p>
      </div>
    </div>
  );
};

export default LoaderModel;
