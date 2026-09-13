import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList(props) {
  return (
    <div className="expense-list">
      <h2>Your Expenses</h2>

      {props.finalExpenses.map((eachItem) => (
        <ExpenseItem
          item={eachItem}
          key={eachItem.id}
          onDeleteExpense={props.onDeleteExpense}
        />
      ))}
    </div>
  );
}