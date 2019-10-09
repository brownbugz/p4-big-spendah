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
      cost: String,
      items: [],
    };
  }

  onChange = (event) => {
    this.setState({category: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      category: "",
      name: String,
      cost: String,
      items: [...this.state.items, this.state.category, this.state.name, this.state.cost]
    });
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

          <NavBar 
            user={this.state.user}
            handleLogout={this.handleLogout}
          />

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
        <div>
          {/* this is supposed to add expense per item,
          but i need to revise what to input */}
          <form className="App-form" onSubmit={this.onSubmit}>
            <input value={this.state.category} onChange={this.onChange} />
            <button>Submit</button>
          </form>
          <ExpenseContainer 
            items={this.state.items} 
          />
        </div>
    );
      </div>
    );
  }
}

export default App;
