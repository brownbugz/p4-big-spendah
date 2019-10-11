import React from 'react';
import './ExpenseListPage.css';
import ExpenseCard from '../../components/ExpenseCard/ExpenseCard';

function ExpenseListPage(props) {
  return (
    <>
      <h3>Expense List</h3>
      <div className='ExpenseListPage-grid'>
        {props.items.map(item =>
          <ExpenseCard
            key={item._id}
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