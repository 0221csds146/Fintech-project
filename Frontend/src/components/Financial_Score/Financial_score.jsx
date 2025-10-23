import React, { useState } from "react";
import "./Financial_score.css";

const FinancialHealth = () => {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [savings, setSavings] = useState("");
  const [debt, setDebt] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: Backend API call will go here
    setResult("Financial health score will appear here (Backend pending)");
  };

  return (
    <div className="health-score">
      <h2>Financial Health Score</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
        <input
          type="number"
          placeholder="Expenses"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
        />

        <input
          type="number"
          placeholder="Savings"
          value={savings}
          onChange={(e) => setSavings(e.target.value)}
        />
        <input
          type="number"
          placeholder="Debt (Optional)"
          value={debt}
          onChange={(e) => setDebt(e.target.value)}
        />


        <button type="submit">Calculate</button>
      </form>
      {result && <p className="result">{result}</p>}
    </div>
  );
};

export default FinancialHealth;
