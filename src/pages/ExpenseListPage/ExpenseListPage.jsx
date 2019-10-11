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
            id={item._id}
            category={item.category}
            name={item.name}
            cost={item.cost}
            handleDelete={props.handleDelete}
          />
        )}
      </div>
    </>
  );
}
export default ExpenseListPage;