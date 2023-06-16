import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem"; // 因為有使用到 ExpenseItem 需要引入
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020"); // 定義一個狀態變數，初始值為 2020

  const saveFliterChangeHandler = (selectedYear) => {
    // 接收選取的年份作為參數。在子元件 ExpensesFilter 的選擇變化時被調用
    // console.log("Expenses.js 收到年份中");
    // console.log(selectedYear);
    setFilteredYear(selectedYear); // 設定新的狀態以顯示選取的年份
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString()  === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={saveFliterChangeHandler}
      />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
