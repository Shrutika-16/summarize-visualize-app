import React from 'react';

const Loader = () => (
  <div className="text-center py-4">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
    <p className="mt-2 text-blue-700">Processing...</p>
  </div>
);

export default Loader;