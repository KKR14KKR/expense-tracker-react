import React from "react";

export default function Summary(props) {
  const totalSpent = props.finalExpenses.reduce((total, eachExpense) => {
    return total + Number(eachExpense.amount);
  }, 0);

  return (
    <div className="summary">
      <p>Total Spent</p>
      <h2>₹{totalSpent}</h2>
    </div>
  );
}