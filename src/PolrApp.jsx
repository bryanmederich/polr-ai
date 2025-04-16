import React from "react";
import { useState } from "react";

export default function PolrApp() {
  const [history, setHistory] = useState([
    "Find dog-friendly cafes",
    "Scenic route to Lincoln Park",
    "Hotels with rooftop bars",
  ]);
  const [saved, setSaved] = useState([]);
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input) {
      setHistory([input, ...history]);
      setInput("");
    }
  };

  const handleSave = (item) => {
    setSaved((prev) => [...new Set([...prev, item])]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-200 p-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-900">POLR.ai</h1>
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Voice/Text Command</label>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Polr, take me to..."
            className="w-full p-2 border rounded"
          />
          <button
            onClick={handleSearch}
            className="mt-2 bg-orange-400 text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-purple-700 mb-2">Category Icons</h2>
          <div className="flex gap-4 text-sm">
            <div className="text-center">
              🏨<br />Hotel
            </div>
            <div className="text-center">
              ☕<br />Café
            </div>
            <div className="text-center">
              🌳<br />Park
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-purple-700 mb-2">Search History</h2>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {history.map((item, idx) => (
              <li key={idx} className="flex justify-between">
                {item}
                <button
                  onClick={() => handleSave(item)}
                  className="text-blue-500 text-xs hover:underline"
                >
                  Save
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-purple-700 mb-2">Saved Places</h2>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {saved.map((place, idx) => (
              <li key={idx}>{place}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 text-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Login with Google</button>
          <p className="text-xs text-gray-500 mt-2">(Stub only - Auth not implemented)</p>
        </div>
      </div>
    </main>
  );
}
