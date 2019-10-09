import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ExpenseCard from '../../components/ExpenseCard/ExpenseCard';
import Card from 'react-bootstrap';

const ExpenseContainer = props => {
  return (
    <div>
      <form className="App-form" onSubmit={props.onSubmit}>
        <label>Category: <input type="text" name="category" /></label>
        <br />
        <label>Name of Item: <input type="text" name="name" /></label>
        <br />
        <label>Cost of Item: $<input type="number" /></label>
        <br />
        <button>Submit</button>
      </form>
    </div>

    <Switch>
        <Route exact path="/expenses" render={({history}) => 
          <ExpenseCard />
        } />
    </Switch>
  )
}

export default ExpenseContainer;