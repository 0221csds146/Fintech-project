import React, { useState } from "react";
import "./EmiCalculator.css";

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [emi, setEmi] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: Backend API call will go here
    setEmi("Calculated EMI will appear here (Backend pending)");
  };

  return (
    <div className="emi-calculator">
      <h2>EMI Calculator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Principal Amount"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Tenure (Years)"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />
        <button type="submit">Calculate</button>
      </form>
      {emi && <p className="result">{emi}</p>}
    </div>
  );
};

export default EmiCalculator;
