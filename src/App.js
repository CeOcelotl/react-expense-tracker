import Expenses from "./components/Expenses/Expenses";
import React, {useState} from 'react';//過去如果每個檔案都要用JSX，都要先引入
import NewExpense from './components/NewExpense/NewExpense';

// DUMMY_EXPENSES 為初始的消費項目
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES); 

  const addExpenseHandler = expense =>{
    // 這裡會接收到子組件(NewExpense)傳遞上來的資料
    setExpenses((preExpenses)=>{
      return [expense, ...preExpenses];
    });
  }

  //items={expenses}是把 expenses 陣列傳遞給 Expenses 元件。
  //在 Expenses 元件裡面，可以透過 props.items 來存取這個陣列。
  //將 addExpenseHandler 函數作為 prop 傳遞給子組件 NewExpense，等待子組件傳遞資料回來
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );

  //舊寫法
  //沒有屬性就直接寫{}
  // return React.createElement("div",
  // {}, 
  // React.createElement("h2",{},"Let's get started!"),
  // React.createElement(Expenses, {items:expenses })
  // );
}

export default App; //匯出此檔案， 到 index.js
