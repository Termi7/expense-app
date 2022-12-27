import { ExpenseDate } from "./ExpenseDate";
import { Card } from "../UI/Card";
import React, { useState } from "react";
import "./ExpenseItem.css";
export const ExpenseItem = (props: any) => {
  // have two variable title and setTitle fucntion
  //react state
  const [title, setTitle] = useState(props.title);

  // const clikHandler = () => {
  //   setTitle("Updated!");
  //   console.log("clik!!!!");
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clikHandler}>Change title</button> */}
    </Card>
  );
};
