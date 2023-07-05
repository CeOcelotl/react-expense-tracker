import React,{useState} from 'react'; // 可寫可不寫， 但要知道JSX是使用 react 函式庫
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props)=>{
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = enteredExpenseData =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString() //為新增項目添增 id
        };
        // console.log(expenseData);
        // 將子元件（ExpenseForm）傳遞的資料再傳遞給父元件(App)
        props.onAddExpense(expenseData);
        setIsEditing(false); // 提交表單後會關閉表單
    }

    const startEditingHandler = ()=>{
        setIsEditing(true);
    }

    const stopEditingHandler = ()=>{
        setIsEditing(false);
    }

    // 將函數 saveExpenseDataHandler 作為prop 傳遞給子組件 ExpenseForm，等待子組件傳遞資料回來
    return <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing &&<ExpenseForm 
        onSaveExpenseData={saveExpenseDataHandler} 
        onCancel={stopEditingHandler}/>}
    </div>
};
export default NewExpense;
