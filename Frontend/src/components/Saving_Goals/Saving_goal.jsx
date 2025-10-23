import React, { useState } from "react";
import "./Saving_goal.css";

const SavingsGoal = () => {
  const [target, setTarget] = useState("");
  const [months, setMonths] = useState("");
  const [monthlySaving, setMonthlySaving] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: Backend API call will go here
    setResult("Savings goal result will appear here (Backend pending)");
  };

  return (
    <div className="savings-goals">
      <h2>Savings Goal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Target Amount"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />
        <input
          type="number"
          placeholder="Months"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
        />
        <input
          type="number"
          placeholder="Monthly Saving"
          value={monthlySaving}
          onChange={(e) => setMonthlySaving(e.target.value)}
        />
        <button type="submit">Check Goal</button>
      </form>
      {result && <p className="result">{result}</p>}
    </div>
  );
};

export default SavingsGoal;
