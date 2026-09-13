import React, { useState } from "react";

export default function ExpenseForm(props) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  function handleChange(event) {
    const userInput = event.target.value;
    setDescription(userInput);
  }

  function handleAmount(event) {
    const userInputAmount = event.target.value;
    setAmount(userInputAmount);
  }

  function handleCategory(event) {
    const userInputCategory = event.target.value;
    setCategory(userInputCategory);
  }

  function handleClick() {
    if (description.trim() === "") {
      setError("Please enter a description");
      return;
    }

    if (Number(amount) <= 0) {
      setError("Amount must be greater than 0");
      return;
    }

    if (category === "") {
      setError("Please select a category");
      return;
    }

    props.onAddExpense({
      id: Date.now(),
      description: description,
      amount: amount,
      category: category
    });

    setDescription("");
    setAmount("");
    setCategory("");
    setError("");
  }

  return (
    <div className="expense-form">
      <h3>Add Expense</h3>

      <label>Description</label>
      <input
        onChange={handleChange}
        value={description}
        type="text"
        placeholder="What did you spend on?"
      />

      <label>Amount</label>
      <input
        onChange={handleAmount}
        value={amount}
        type="number"
        placeholder="eg: 100"
      />

      <label htmlFor="dropDown">Category</label>
      <select
        id="dropDown"
        onChange={handleCategory}
        value={category}
      >
        <option value="">Select category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Others">Others</option>
      </select>

      {error && <p className="error-message">{error}</p>}

      <button onClick={handleClick}>+ Add Expense</button>
    </div>
  );
}