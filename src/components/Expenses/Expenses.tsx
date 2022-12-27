import { Card } from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";
import { ExpensesFilter } from "./ExpenseFilter";
import { ExpenseList } from "./ExpensesList";
import { ExpenseChart } from "./ExpenseChart";
export const Expenses = (props: any) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear: any) => {
    // console.log("Expense.js");
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense: any) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
        <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
        <ExpenseList items={filteredExpenses}></ExpenseList>
      </Card>
    </div>
  );
};
