import { ExpenseItem } from "./ExpenseItem";
import "./ExpensesList.css";
export const ExpenseList = (props: any) => {
  if (props.items.length === 0) {
    return <h2 className="expense-list__fallback">Found no expenses.</h2>;
  }
  return (
    <li className="expenses-list">
      {props.items.map((expense: any) => (
        <ExpenseItem
          //alway use an Id for list in react
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </li>
  );
};
