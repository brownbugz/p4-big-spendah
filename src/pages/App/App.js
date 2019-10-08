import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import ExpenseBoardPage from '../ExpenseBoardPage/ExpenseBoardPage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Hey Big Spendah!</h2>
        </header>
        <Switch>
          <Route exact path="/" render={() =>
            <ExpenseBoardPage />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
