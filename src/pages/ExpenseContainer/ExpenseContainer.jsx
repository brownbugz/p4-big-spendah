import React from 'react';

const ExpenseContainer = props => (
  <ul>
    {
      // how to put expense card here???
      props.items.map((item, index) => 
      <li key={index}>{item}</li>)
    }
  </ul>
);

export default ExpenseContainer;