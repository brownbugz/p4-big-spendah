import React from 'react';
import './ExpenseListPage.css';
import ExpenseCard from '../../components/ExpenseCard/ExpenseCard';

function ExpenseListPage(props) {
  return (
    <>
      <h1>Expense List</h1>
      <div className='ExpenseListPage-grid'>
        {props.items.map(item =>
          <ExpenseCard
            key={item._id}
            item={item}
            handleDelete={props.handleDelete}
          />
        )}
      </div>
    </>
  );
}
export default ExpenseListPage;