import React from 'react';

const ExpenseContainer = props => (
  <ul>
    {
      props.items.map((item, index) => 
      <li key={index}>{item}</li>)
    }
  </ul>
);

export default ExpenseContainer;