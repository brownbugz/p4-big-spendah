import React, { Component } from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import ExpenseBoardPage from '../ExpenseBoardPage/ExpenseBoardPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Hey Big Spendah!</h2>
        </header>

        <main>
          Expense Board
        </main>
      </div>
    );
  }
}

export default App;
