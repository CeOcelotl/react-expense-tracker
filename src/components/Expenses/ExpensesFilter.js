import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const filterChangeHandler = event =>{// 這是一個處理函數，它會在 select 元素的選擇變化時被調用。
        // console.log(event.target.value);
        props.onFilterChange(event.target.value); // 在此函數中，調用由父組件傳過來的處理函數，並將新選擇的值作為參數傳遞給它。
    }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;