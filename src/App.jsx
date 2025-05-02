import React, { useState } from 'react';
import TextInput from './components/TextInput';
import SummaryDisplay from './components/SummaryDisplay';
import ImageDisplay from './components/ImageDisplay';
import Loader from './components/Loader';

function App() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setSummary('');
    setImageUrl('');

    try {
      // Summarize
      const res = await fetch('https://api-inference.huggingface.co/models/facebook/bart-large-cnn', {
        method: 'POST',
        headers: {
          Authorization: `Bearer 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`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputs: text }),
      });
      const data = await res.json();
      const summaryText = data[0]?.summary_text || 'Failed to summarize.';
      setSummary(summaryText);

      // Generate image
      const imgRes = await fetch('https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0', {
        method: 'POST',
        headers: {
          Authorization: `Bearer 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`,
          'Content-Type': 'application/json',
          Accept: 'image/png',
        },
        body: JSON.stringify({ inputs: summaryText }),
      });
      const blob = await imgRes.blob();
      setImageUrl(URL.createObjectURL(blob));
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Summarize & Visualize</h1>
      <TextInput text={text} setText={setText} onSummarize={handleSummarize} />
      {loading && <Loader />}
      {summary && (
        <SummaryDisplay summary={summary} setSummary={setSummary} onRegenerate={handleSummarize} />
      )}
      {imageUrl && <ImageDisplay imageUrl={imageUrl} />}
    </div>
  );
}

export default App;