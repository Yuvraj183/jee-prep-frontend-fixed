
import React, { useState } from 'react';
const API_URL = 'https://jee-prep-backend-fixed.onrender.com/solve';

export default function App() {
  const [doubt, setDoubt] = useState('');
  const [solution, setSolution] = useState('');

  const handleSubmit = async () => {
    setSolution('Solving your doubt...');
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ doubt })
      });
      const data = await res.json();
      setSolution(data.explanation);
    } catch (err) {
      setSolution('Something went wrong. Please try again.');
    }
  };

  return (
    <main className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">JEE Prep Doubt Solver</h1>

      <textarea
        className="w-full border rounded p-2 mb-4"
        rows={5}
        placeholder="Type your doubt here..."
        value={doubt}
        onChange={(e) => setDoubt(e.target.value)}
      ></textarea>

      <button
        className="w-full bg-blue-600 text-white py-2 rounded mb-4"
        onClick={handleSubmit}
      >
        Solve Doubt
      </button>

      {solution && (
        <div className="bg-gray-100 p-3 rounded">
          <h2 className="font-semibold mb-2">Solution:</h2>
          <p>{solution}</p>
        </div>
      )}
    </main>
  );
}
