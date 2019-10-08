import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import ExpenseContainer from '../ExpenseContainer/ExpenseContainer';
import userService from '../../utils/userService';


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

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Hey Big Spendah!</h2>
        </header>
        <Switch>
          <Route exact path="/" render={() =>
            <ExpenseContainer 
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          }/>
          <Route exact path="signup" render={({history}) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path="/login" render={({history}) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
