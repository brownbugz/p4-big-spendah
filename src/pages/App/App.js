import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import ExpenseContainer from '../ExpenseContainer/ExpenseContainer';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: userService.getUser(),
      category: "",
      name: String,
      cost: Number,
      items: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.category)
    this.setState({
      category: event.target.category,
      name: event.target.name,
      cost: event.target.cost,
      items: [...this.state.items, this.state.category, this.state.name, this.state.cost]
    });
    console.log(this.state);
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

        <NavBar 
          user={this.state.user}
          handleLogout={this.handleLogout}
        />

        <Switch>
          <Route exact path="/expenses" render={({history}) => 
            <ExpenseContainer 
              items={this.state.items} 
              handleSubmit={this.handleSubmit}
            />
          } />

          <Route exact path="/signup" render={({history}) =>
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
