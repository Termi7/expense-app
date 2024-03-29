import React, { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

export const NewExpense = (props: any) => {
  const [isEditing, setEditing] = useState(false);

  const SaveExpenseDataHandler = (enteredExpenseData: any) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setEditing(false);
  };
  const startEditingHandler = () => {
    setEditing(true);
  };
  const stopEditingHandler = () => {
    setEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};
