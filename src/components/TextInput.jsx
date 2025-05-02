import React from 'react';

const TextInput = ({ text, setText, onSummarize }) => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => setText(e.target.result);
    reader.readAsText(file);
  };

  return (
    <div className="mb-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste or write your text here..."
        className="w-full p-4 border border-gray-300 rounded-lg h-40"
      />
      <div className="flex justify-between items-center mt-2">
        <input type="file" accept=".txt" onChange={handleFileUpload} />
        <button onClick={onSummarize} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Summarize
        </button>
      </div>
    </div>
  );
};

export default TextInput;
