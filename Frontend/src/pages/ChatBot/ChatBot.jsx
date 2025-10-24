import React, { useState } from "react";
import "./ChatBot.css";

const Assistant = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    // Later this will call your backend AI model
    setResponse(`You asked: "${query}". Here will be the AI response.`);
    setShowOutput(true);
    setQuery("");
  };

  return (
    <div className="assistant-container">
      <h2>Your Financial Consultant</h2>
      <p>Ask your financial questions or record your voice query.</p>

      {/* Input Section */}
      <form className="assistant-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your query here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Submit</button>
        <button type="button" className="mic-btn">🎤</button>
      </form>

      {/* Output Section (Visible only after submit) */}
      {showOutput && (
        <div className="assistant-output">
          <h3>Assistant’s Response</h3>
          <div className="assistant-response-box">
            <p>{response}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assistant;
