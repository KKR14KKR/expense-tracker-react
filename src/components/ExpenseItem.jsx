import React from "react";

export default function ExpenseItem(props) {
  function handleDelete() {
    props.onDeleteExpense(props.item.id);
  }

  return (
    <div className="expense-item">
      <div className="expense-details">
        <h3>{props.item.description}</h3>
        <p>{props.item.category}</p>
      </div>

      <div className="expense-right">
        <strong>₹{props.item.amount}</strong>

        <button onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}