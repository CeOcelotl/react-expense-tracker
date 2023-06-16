import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

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
     <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
