import React from 'react';

const SummaryDisplay = ({ summary, setSummary, onRegenerate }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(summary);
  };

  return (
    <div className="mb-6 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Summary</h2>
      <textarea
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded mb-2"
      />
      <div className="flex justify-between">
        <button onClick={copyToClipboard} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Copy
        </button>
        <button onClick={onRegenerate} className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
          Regenerate Image
        </button>
      </div>
    </div>
  );
};

export default SummaryDisplay;