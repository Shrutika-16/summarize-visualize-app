import React from 'react';

const ImageDisplay = ({ imageUrl }) => {
  return (
    <div className="mb-6 text-center">
      <h2 className="text-xl font-semibold mb-2">Generated Image</h2>
      <img src={imageUrl} alt="Generated"  className="inline-block max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain rounded shadow" />
    </div>
  );
};

export default ImageDisplay;