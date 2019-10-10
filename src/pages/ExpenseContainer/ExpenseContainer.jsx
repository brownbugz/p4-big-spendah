import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import expenseService from '../../utils/expenseService';


class ExpenseContainer extends Component {
  constructor() {
    super();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Container>
          <Row>
            <label>Category: <input type="text" name="category" /></label>
          </Row>
          <Row>
            <label>Name of Item: <input type="text" name="name" /></label>
          </Row>
          <Row>
            <label>Cost of Item: $<input type="number" name="cost" /></label>
          </Row>
          <Row>
            <button>Submit</button>
          </Row>
        </Container>
      </form>
    );
  }
  //  the ExpenseCard should display at the bottom
}

export default ExpenseContainer;