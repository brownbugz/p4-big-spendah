import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import ExpenseContainer from '../ExpenseContainer/ExpenseContainer';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import expenseService from '../../utils/expenseService';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: userService.getUser(),
      category: "",
      name: "",
      cost: 0,
      items: expenseService.index(),
    };
  }

  async componentDidMount() {
    const items = await expenseService.index();
    this.setState({items}); 
  }

  handleDelete (expenseToBeDeleted) {
    var newExpenses = this.state.items.filter((_item) => {
      return _item != expenseToBeDeleted
    });
    this.setState({items: newExpenses});
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    let createdItem = await expenseService.create({
      category: this.state.category,
      name: this.state.name,
      cost: this.state.cost
    });
    console.log(createdItem);

    this.setState({
      items: [...this.state.items, createdItem]
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

        <NavBar 
          user={this.state.user}
          handleLogout={this.handleLogout}
        />

        <Switch>
          <Route exact path="/expenses" render={({history}) => 
            <ExpenseContainer 
              items={this.state.items} 
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
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
