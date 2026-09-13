import "./styles.css";
import Header from "./components/Header";
import Summary from "./components/Summary";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import React, { useState, useEffect } from "react";

export default function App() {
  // Get saved expenses when the app starts
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");

    if (savedExpenses) {
      return JSON.parse(savedExpenses);
    }

    return [];
  });

  // Add a new expense
  function addExpense(newExpense) {
    setExpenses((preValue) => {
      return [...preValue, newExpense];
    });
  }

  // Delete an expense
  function deleteExpense(id) {
    setExpenses((preValue) => {
      return preValue.filter((eachExpense) => {
        return eachExpense.id !== id;
      });
    });
  }

  // Save expenses whenever they change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className="App">
      <Header />

      <Summary finalExpenses={expenses} />

      <ExpenseForm onAddExpense={addExpense} />

      <ExpenseList
        finalExpenses={expenses}
        onDeleteExpense={deleteExpense}
      />
    </div>
  );
}