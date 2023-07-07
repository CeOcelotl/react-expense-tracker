import React,{useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props)=>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });

    const titleChangeHandler = event =>{
        setEnteredTitle(event.target.value); //標題輸入值
        // setUserInput({
        //     ...userInput,//複製原始的 userInput 物件的所有屬性和值，並將它們添加到新的物件中。
        //     enteredTitle:event.target.value,
        // })
        // setUserInput((preState)=>{
        //     return  {...preState, enteredTitle:event.target.value}
        // })
    }

    const amountChangeHandler= event =>{
        setEnteredAmount(event.target.value);//總價輸入值
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value
        // })
    }

    const dateChangeHandler= event =>{
        setEnteredDate(event.target.value);//日期輸入值
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value
        // })
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        
        const expenseDate = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        // console.log(expenseDate);//可以看到使用者輸入的內容
        // 呼叫了 props.onSaveExpenseData 函數，將 expenseData 作為參數，將資料傳遞給父組件(NewExpense)
        props.onSaveExpenseData(expenseDate);
        // 用來清空表單輸入欄位的內容。
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' step='2022-12-31' value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
    )
};

export default ExpenseForm;